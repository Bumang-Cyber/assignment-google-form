import styled from "styled-components";

interface InputProps {
  type?: "default" | "title";
  value?: string;
  onBlur?: () => void;
}

const Input = ({ type = "default", value, onBlur }: InputProps) => {
  // TODO: 설문지 title이 ""가 되면 '제목없는 설문지'로 타이틀 변경
  return <InputContainer onBlur={onBlur} value={value} $type={type}></InputContainer>;
};

export default Input;

const InputContainer = styled.input<{ $type: string }>`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray400};

  ${({ theme, $type }) => ($type === "default" ? theme.font.body3r : theme.font.subtitle3)}

  transition: all 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray800};
  }
`;
