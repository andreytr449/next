import { createClient } from '@pkg/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

const escapeCSV = (value: string) => `"${value.replace(/"/g, '""')}"`;

export async function GET(req: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError)
      return NextResponse.json(
        {
          ok: false,
          message:
            userError?.message ||
            'Authentication failed. Please check your credentials and try again',
        },
        { status: 401 }
      );

    const {
      data: questions,
      error: questionsError,
      status: questionStatus,
    } = await supabase
      .from('user_questions')
      .select('question_text,created_at')
      .eq('user_id', user.id);

    if (questionsError) {
      return NextResponse.json(
        {
          ok: false,
          message: questionsError.message,
        },
        { status: questionStatus }
      );
    }

    const headers = ['Question', 'Created at'];

    const csvContent = [
      headers.join(','),
      ...questions.map((item) => `${escapeCSV(item.question_text)},${escapeCSV(item.created_at)}`),
    ].join('\n');

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="users_export.csv"',
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        ok: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
