import { setAnswer } from "@/utils/setAnswer";
import styled from "styled-components";

interface textProps {
  questionIndex: number;
}

const Long = ({ questionIndex }: textProps) => {
  const inputHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;

    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
  };

  const textInputHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setAnswer(questionIndex, target.value);
  };

  return <InputContainer placeholder="장문형 텍스트" onInput={inputHandler} onChange={textInputHandler} />;
};

export default Long;

const InputContainer = styled.textarea`
  width: 100%;
  min-height: 40px;
  border: none;
  border-bottom: 1px dotted ${({ theme }) => theme.color.gray400};
  outline: none;
  word-wrap: break-word;

  ${({ theme }) => theme.font.body3r};

  transition: all 0.2s ease-in-out;
  background-color: white;

  &:focus {
    border-bottom: 1px dotted ${({ theme }) => theme.color.gray800};
  }
`;
