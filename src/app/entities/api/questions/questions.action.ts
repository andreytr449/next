"use server";

import { createClient } from "@pkg/supabase/server";

export async function createQuestion(userId: string, question: string) {
  const supabase = createClient();

  const { error } = await (await supabase)
    .from("user_questions")
    .insert([
      { question_text: question, user_id: userId, is_completed: false },
    ]);

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
