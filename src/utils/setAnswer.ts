import { localSaveByDebounce } from "@/utils/localSaveByDebounce";

export const setAnswer = (index: number, answer: string) => {
  localSaveByDebounce(`answer-${index}`, answer);
};
