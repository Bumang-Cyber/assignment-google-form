import styled from "styled-components";

interface InputProps {
  type?: "default" | "title";
  value?: string;
  onChange: (str: string, i: number | undefined) => void;
  onBlur?: () => void;
  placeHolder?: string;
  index?: number;
  isDisabled?: boolean;
}

const Input = ({ type = "default", value, onBlur, placeHolder, onChange, index, isDisabled }: InputProps) => {
  return (
    <InputContainer //
      placeholder={placeHolder}
      onBlur={onBlur}
      value={value}
      $type={type}
      onChange={(e) => onChange(e.target.value, index)}
      disabled={isDisabled}
    />
  );
};

export default Input;

const InputContainer = styled.input<{ $type: string }>`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray400};

  ${({ theme, $type }) => ($type === "default" ? theme.font.body3r : theme.font.subtitle3)}
  background-color: white;

  transition: all 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray800};
  }
`;
