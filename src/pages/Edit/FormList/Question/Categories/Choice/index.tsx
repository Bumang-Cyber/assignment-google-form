import Input from "@/components/Input";
import { type ChoiceCategory } from "@/types/category";
import { type QuestionType } from "@/types/question";
import { SetStateAction } from "react";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

interface ChoiceProps {
  choice: ChoiceCategory;
  options: string[];
  questions: QuestionType[];
  questionIndex: number;
  onSetQuestions: React.Dispatch<SetStateAction<QuestionType[]>>;
}

const Choice = ({ choice, options, questions, questionIndex, onSetQuestions }: ChoiceProps) => {
  const onChangeHandler = (str: string, index: number | undefined) => {
    if (index === undefined) return;
    const optionsCopy = [...options];
    optionsCopy[index] = str;
    console.log(optionsCopy, "optionsCopy");

    const questionsCopy = [...questions];
    questionsCopy[questionIndex]["options"] = optionsCopy;

    onSetQuestions(questionsCopy);
  };

  const onAddHandler = () => {
    const order = options.length + 1;
    const optionsCopy = [...options, `옵션 ${order}`];

    const questionsCopy = [...questions];
    questionsCopy[questionIndex]["options"] = optionsCopy;
    console.log(questionsCopy, questionIndex, optionsCopy, "qc");
    onSetQuestions(questionsCopy);
  };

  const onDeleteHandler = (index: number | undefined) => {
    if (index === undefined) return;
    const optionsCopy = [...options];
    const filtered = optionsCopy.filter((_, i) => i !== index);

    const questionsCopy = [...questions];
    questionsCopy[questionIndex]["options"] = filtered;

    onSetQuestions(questionsCopy);
  };

  const onCheckRadio = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.checked = false;
  };

  return (
    <ChoiceList>
      {options.map((string, i) => (
        <ChoiceContainer key={i}>
          {choice === "객관식 질문" && <input type="radio" onClick={onCheckRadio} />}
          {choice === "체크박스" && <input type="checkbox" onClick={onCheckRadio} />}
          {choice === "드롭다운" && <Index> {i + 1} </Index>}
          <Input //
            index={i}
            onChange={onChangeHandler}
            placeHolder="옵션"
            value={string}
          />
          <CgClose className="icon" onClick={() => onDeleteHandler(i)} />
        </ChoiceContainer>
      ))}
      <ChoiceContainer onClick={onAddHandler}>
        <input type="radio" onClick={onCheckRadio} />
        <AddText>옵션 추가</AddText>
      </ChoiceContainer>
    </ChoiceList>
  );
};

export default Choice;

const ChoiceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ChoiceContainer = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.font.body3r}
  color: ${({ theme }) => theme.color.gray700};

  .icon {
    font-size: 24px;
  }

  .icon:hover {
    color: black;
  }
`;

const AddText = styled.div`
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const Index = styled.div`
  width: 14px;
`;
