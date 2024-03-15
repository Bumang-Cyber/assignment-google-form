import styled from "styled-components";

interface InputProps {
  type?: "default" | "title";
  value?: string;
  onChange: (str: string, i: number | undefined) => void;
  onBlur?: () => void;
  placeHolder?: string;
  index?: number;
}

const Input = ({ type = "default", value, onBlur, placeHolder, onChange, index }: InputProps) => {
  // TODO: 설문지 title이 ""가 되면 '제목없는 설문지'로 타이틀 변경
  return <InputContainer placeholder={placeHolder} onBlur={onBlur} value={value} $type={type} onChange={(e) => onChange(e.target.value, index)} />;
};

export default Input;

const InputContainer = styled.input<{ $type: string }>`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray400};

  ${({ theme, $type }) => ($type === "default" ? theme.font.body3r : theme.font.subtitle3)}

  transition: all 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray800};
  }
`;
