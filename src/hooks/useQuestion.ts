import { RootState } from "@/store/index";
import { QuestionType } from "@/types/question";
import { change, push, pop } from "@/store/questionSlice";
import { useDispatch, useSelector } from "react-redux";

const useQuestion = () => {
  const dispatch = useDispatch();
  const currentQuestions = useSelector((state: RootState) => {
    return state.question.value;
  });

  const changeQuestionHandler = (items: QuestionType[]) => {
    dispatch(change(items));
  };

  const pushQuestionHandler = (items: QuestionType) => {
    dispatch(push(items));
  };

  const popQuestionHandler = () => {
    dispatch(pop());
  };

  return { currentQuestions, changeQuestionHandler, pushQuestionHandler, popQuestionHandler };
};

export default useQuestion;
