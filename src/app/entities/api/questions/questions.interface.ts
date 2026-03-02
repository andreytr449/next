export interface Questions {
    id: string;
    user_id: string;
    is_completed: boolean;
    completed_at: string;
    question_text: string;
    created_at:string
  }

  export interface QuestionsResponse {
    ok:boolean
    questions:Questions[]
    totalPages:number
    count:number
  }