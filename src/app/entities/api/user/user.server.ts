"use server";

import { createClient } from "@pkg/supabase/server";
import { UserResponse } from "./user.interface";

export async function getUser(): Promise<UserResponse> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { ok: false, error: authError?.message || "Something went wrong" };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) {
    return { ok: false, error: profileError.message };
  }
  const { data: questions, error: questionsError } = await supabase
    .from("user_questions")
    .select("*")
    .eq("user_id", user.id);

  if (questionsError) return { ok: false, error: questionsError.message };

  return {
    ok: true,
    user,
    profile,
    questions,
  };
}
