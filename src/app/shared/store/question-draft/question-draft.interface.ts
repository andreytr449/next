export interface QuestionDraftState {
  draft: string;
  setDraft: (text: string) => void;
  clearDraft: () => void;
}
