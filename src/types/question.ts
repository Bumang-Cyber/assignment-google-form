import { CategoryType } from "./category";

export interface OptionType {
  id: number;
  content: string;
}

export interface QuestionType {
  id: number;
  title: string;
  category: CategoryType;
  options: OptionType[];
  required: boolean;
}
