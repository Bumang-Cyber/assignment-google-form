export type CategoryType = "단답형" | "장문형" | "객관식 질문" | "체크박스" | "드롭다운";
export type ChoiceCategory = "객관식 질문" | "체크박스" | "드롭다운";

export const categories: CategoryType[] = ["단답형", "장문형", "객관식 질문", "체크박스", "드롭다운"];

export type CategoriesType = {
  name: CategoryType;
  select: boolean;
  component: JSX.Element;
}[];
