import styled from "styled-components";

const Short = () => {
  return <InputContainer placeholder="단답형 텍스트" />;
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
`;
