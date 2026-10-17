import { NewNote } from "@/types/note";
import { create } from "zustand";

interface NoteDraftStore {
  draft: NewNote;
  setDraft: (note: NewNote) => void;
  clearDraft: () => void;
}
const initialDraft = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteDraftStore = create<NoteDraftStore>()((set) => ({
  draft: initialDraft,
  setDraft: (note) => set(() => ({ draft: note })),
  clearDraft: () => set(() => ({ draft: initialDraft })),
}));
