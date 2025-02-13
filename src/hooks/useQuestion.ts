import { deepCopy } from "./../utils/deepCopy";
import { RootState } from "@/store/index";
import { QuestionType } from "@/types/question";
import { change, push, pop, reset } from "@/store/questionSlice";
import { useDispatch, useSelector } from "react-redux";

const useQuestion = () => {
  const dispatch = useDispatch();
  const currentQuestions: QuestionType[] = useSelector((state: RootState) => {
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

  const setRequiredByIndexHandler = (toggle: boolean, index: number) => {
    const copied = deepCopy(currentQuestions);
    copied[index].required = toggle;
    dispatch(change(copied));
  };

  const copyByIndexHandler = (index: number) => {
    const copied = deepCopy(currentQuestions);
    console.log(copied);
    const prior = copied.slice(0, index + 1);
    const latter = copied.slice(index + 1);

    const popped = prior.pop();
    const target = deepCopy(popped);
    target.id = Date.now();
    prior.push(popped);
    prior.push(target);
    dispatch(change([...prior, ...latter]));
  };

  const deleteByIndexHandler = (index: number) => {
    const copied = deepCopy(currentQuestions);
    console.log(copied);
    copied.splice(index, 1);
    console.log(copied);
    dispatch(change(copied));
  };

  const resetAllHandler = () => {
    dispatch(reset());
  };

  return { currentQuestions, changeQuestionHandler, pushQuestionHandler, popQuestionHandler, setRequiredByIndexHandler, copyByIndexHandler, deleteByIndexHandler, resetAllHandler };
};

export default useQuestion;
