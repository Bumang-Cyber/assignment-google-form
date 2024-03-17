import { setAnswer } from "@/utils/setAnswer";
import styled from "styled-components";

interface textProps {
  questionIndex: number;
}

const Short = ({ questionIndex }: textProps) => {
  const textInputHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setAnswer(questionIndex, target.value);
  };

  return <InputContainer placeholder="단답형 텍스트" onChange={textInputHandler} />;
};

export default Short;

const InputContainer = styled.input`
  width: 280px;
  height: 40px;
  border-bottom: 1px dotted ${({ theme }) => theme.color.gray400};

  ${({ theme }) => theme.font.body3r};

  transition: all 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px dotted ${({ theme }) => theme.color.gray800};
  }
  background-color: white;
`;
