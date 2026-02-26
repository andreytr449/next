export interface Profile {
  id: string;
  username: string;
  created_at: string;
}

export interface User {
  id: string;
  aud: string;
  username?: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

export interface Questions {
  id: string;
  user_id: string;
  is_completed: boolean;
  completed_at: string;
  question_text: string;
}

export interface UserErrorResponse {
  ok: false;
  error: string;
}

export interface UserSuccessResponse {
  ok: true;
  user: User;
  profile: Profile;
  questions: Questions[];
}

export type UserResponse = UserSuccessResponse | UserErrorResponse;
