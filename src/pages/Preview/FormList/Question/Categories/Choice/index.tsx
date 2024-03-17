import Input from "@/components/Input";
import useQuestion from "@/hooks/useQuestion";
import { type ChoiceCategory } from "@/types/category";
import { deepCopy } from "@/utils/deepCopy";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useState } from "react";

interface ChoiceProps {
  choice: ChoiceCategory;
  options: string[];
  questionIndex: number;
}

const Choice = ({ choice, options, questionIndex }: ChoiceProps) => {
  const { currentQuestions, changeQuestionHandler } = useQuestion();
  const [selected, setSelected] = useState(options[0]);

  const onChangeHandler = (str: string, index: number | undefined) => {
    if (index === undefined) return;
    const optionsCopy = deepCopy(options);
    optionsCopy[index] = str;
    console.log(optionsCopy, "optionsCopy");

    const questionsCopy = deepCopy(currentQuestions);
    questionsCopy[questionIndex]["options"] = optionsCopy;

    changeQuestionHandler(questionsCopy);
  };

  if (choice === "객관식 질문" || choice === "체크박스") {
    return (
      <ChoiceList>
        {options.map((string, i) => (
          <ChoiceContainer key={i}>
            {choice === "객관식 질문" && <input name="radio" type="radio" />}
            {choice === "체크박스" && <input type="checkbox" />}
            <Input //
              index={i}
              onChange={onChangeHandler}
              placeHolder="옵션"
              value={string}
              isDisabled={true}
            />
          </ChoiceContainer>
        ))}
      </ChoiceList>
    );
  }

  if (choice === "드롭다운") {
    return (
      <ChoiceList>
        <Dropdown //
          options={options}
          index={questionIndex}
          selected={selected}
          setSelected={setSelected}
        />
      </ChoiceList>
    );
  }
};

export default Choice;

const ChoiceList = styled.form`
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
