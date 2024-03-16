import { CategoryType } from "./category";

export interface QuestionType {
  id: number;
  title: string;
  category: CategoryType;
  options: string[];
  required: boolean;
}
