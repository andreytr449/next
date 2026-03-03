'use server';

import { createClient } from '@pkg/supabase/server';
import { QuestionsActionResponse } from './questions.interface';

export async function createQuestion(userId: string, question: string) {
  const supabase = createClient();

  const { error } = await (await supabase)
    .from('user_questions')
    .insert([{ question_text: question, user_id: userId, is_completed: false }]);

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

export async function getAllQuestions(): Promise<QuestionsActionResponse> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!user || authError) return { ok: false, error: authError?.message || 'No user was found' };

  const { data: questions, error: questionsError } = await supabase
    .from('user_questions')
    .select('*')
    .eq('user_id', user.id);

  if (questionsError) return { ok: false, error: questionsError?.message };

  return { ok: true, questions };
}
