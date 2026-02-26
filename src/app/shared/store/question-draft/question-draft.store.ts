import { create } from "zustand";
import { QuestionDraftState } from "./question-draft.interface";
import { persist } from "zustand/middleware";

export const useQuestionDraftStore = create<QuestionDraftState>()(
  persist(
    (set) => ({
      draft: "",
      setDraft: (text) => set({ draft: text }),
      clearDraft: () => set({ draft: "" }),
    }),
    {
      name: "question-draft-storage",
    },
  ),
);
