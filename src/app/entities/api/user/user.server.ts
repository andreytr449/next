"use server";

import { createClient } from "@pkg/supabase/server";
import { ProfileResponse, UserResponse } from "./user.interface";

export async function getUser(
  page: number = 1,
  limit: number = 5,
): Promise<UserResponse> {
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

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const {
    data: questions,
    error: questionsError,
    count,
  } = await supabase
    .from("user_questions")
    .select("*")
    .eq("user_id", user.id)
    .eq("is_completed", false)
    .range(from, to);

  if (questionsError) return { ok: false, error: questionsError.message };

  const totalPages = count ? Math.ceil(count / limit) : 1;

  return {
    ok: true,
    user,
    profile,
    questions,
    totalPages,
  };
}

export async function getUserById(userId: string): Promise<ProfileResponse> {
  const supabase = await createClient();

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (profileError) {
    return { ok: false, error: profileError.message };
  }

  return {
    ok: true,
    profile,
  };
}
