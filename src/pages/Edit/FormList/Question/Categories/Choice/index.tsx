import Input from "@/components/Input";
import { ChoiceCategory } from "@/types/category";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

interface ChoiceProps {
  choice: ChoiceCategory;
}

const Choice = ({ choice }: ChoiceProps) => {
  const [option, setOption] = useState<string[]>(["옵션 1"]);

  const onChangeHandler = (str: string, index: number | undefined) => {
    if (index === undefined) return;
    const copy = [...option];
    copy[index] = str;
    setOption(copy);
    console.log(option, "option");
  };

  const onAddHandler = () => {
    const order = option.length + 1;
    setOption([...option, `옵션 ${order}`]);
  };

  const onDeleteHandler = (index: number | undefined) => {
    if (!index) return;
    const copy = [...option];
    const filtered = copy.filter((_, i) => i !== index);
    setOption(filtered);
  };

  const onCheckRadio = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.checked = false;
  };

  return (
    <ChoiceList>
      {option.map((string, i) => (
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
