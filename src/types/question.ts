import { CategoryType } from "./category";

export interface QuestionType {
  category: CategoryType;
  option: string[] | null;
}

export interface TitleType {
  title: string;
  description: string;
}
