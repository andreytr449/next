import { createClient } from "@pkg/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        {
          ok: false,
          message: authError?.message,
        },
        { status: 401 },
      );
    }

    const {
      data: profile,
      error: profileError,
      status: profileStatus,
    } = await supabase.from("profiles").select("*").eq("id", user.id).single();

    if (profileError) {
      return NextResponse.json(
        {
          ok: false,
          message: profileError.message,
        },
        { status: profileStatus },
      );
    }
    const {
      data: questions,
      error: questionsError,
      status: questionStatus,
    } = await supabase
      .from("user_questions")
      .select("*")
      .eq("user_id", user.id);

    if (questionsError) {
      return NextResponse.json(
        {
          ok: false,
          message: questionsError.message,
        },
        { status: questionStatus },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        user,
        profile,
        questions,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Internal sever error",
      },
      { status: 500 },
    );
  }
}
