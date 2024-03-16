import { CategoryType } from "./category";

export interface QuestionType {
  id: number;
  category: CategoryType;
  options: string[];
}
