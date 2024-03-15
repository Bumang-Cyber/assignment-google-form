import styled from "styled-components";

const Long = () => {
  const inputHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;

    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
  };

  return <InputContainer placeholder="장문형 텍스트" onInput={inputHandler} />;
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

  &:focus {
    border-bottom: 1px dotted ${({ theme }) => theme.color.gray800};
  }
`;
