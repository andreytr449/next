import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@pkg/supabase/server";

export async function GET(request: NextRequest) {
  const limit = 5;
  try {
    const supabase = await createClient();
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;

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

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const {
      data: questions,
      error: questionsError,
      count,
      status: questionStatus,
    } = await supabase
      .from("user_questions")
      .select("*", { count: "exact" })
      .eq("user_id", user.id)
      .eq("is_completed", false)
      .range(from, to);

    if (questionsError) {
      return NextResponse.json(
        {
          ok: false,
          message: questionsError.message,
        },
        { status: questionStatus },
      );
    }
    const totalPages = count ? Math.ceil(count / limit) : 1;

    return NextResponse.json(
      {
        ok: true,
        questions,
        totalPages,
        count
      },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        ok: false,
        message: "Internal sever error",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest) {
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

    const body = await req.json();
    if (!body.questionId)
      return NextResponse.json(
        { ok: false, message: "Question id required." },
        { status: 400 },
      );

    const { data, error } = await supabase
      .from("user_questions")
      .update({ is_completed: true })
      .eq("id", body.questionId)
      .eq("user_id", user.id)
      .select();

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { ok: false, message: "Question not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Field updated successfully",
      data: data[0],
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        ok: false,
        message: "Internal sever error",
      },
      { status: 500 },
    );
  }
}
