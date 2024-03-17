export const setAnswer = (index: number, answer: string) => {
  localStorage.setItem(`answer-${index}`, answer);
};
