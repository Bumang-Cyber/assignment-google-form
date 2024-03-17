import Input from "@/components/Input";
import { type ChoiceCategory } from "@/types/category";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { setAnswer } from "@/utils/setAnswer";

interface ChoiceProps {
  choice: ChoiceCategory;
  options: string[];
  questionIndex: number;
}

const Choice = ({ choice, options, questionIndex }: ChoiceProps) => {
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    setAnswer(questionIndex, selected);
    // eslint-disable-next-line
  }, [selected]);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, str: string) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      console.log(str, target, target.checked, questionIndex);
      setAnswer(questionIndex, str);
    } else {
      setAnswer(questionIndex, "");
    }
  };

  if (choice === "객관식 질문" || choice === "체크박스") {
    return (
      <ChoiceList>
        {options.map((option, i) => (
          <ChoiceContainer key={i}>
            {choice === "객관식 질문" && <input onChange={(e) => checkHandler(e, option)} name="radio" type="radio" />}
            {choice === "체크박스" && <input onChange={(e) => checkHandler(e, option)} type="checkbox" />}
            <Input //
              index={i}
              onChange={() => {}}
              placeHolder="옵션"
              value={option}
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
