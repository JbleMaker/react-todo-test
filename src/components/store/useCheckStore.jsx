import { create } from "zustand";

export const useCheckStore = create((set) => ({
  checked: false,
  setChecked: () => set((prev) => ({ checked: !prev.checked })),
}));
