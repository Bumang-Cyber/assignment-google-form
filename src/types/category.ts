export type Category = "단답형" | "장문형" | "객관식 질문" | "체크박스" | "드롭다운";

export const categories: Category[] = ["단답형", "장문형", "객관식 질문", "체크박스", "드롭다운"];

export type CategoriesType = {
  name: Category;
  select: boolean;
  component: JSX.Element;
}[];
