import styled from "styled-components";

interface FocusProps {
  focus: boolean;
}

const FocusIndicator = ({ focus }: FocusProps) => {
  return <FocusContainer $focus={focus} />;
};

const FocusContainer = styled.div<{ $focus: boolean }>`
  width: 8px;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.color.blue800};
  z-index: 1;

  transition: all 0.2s ease-in-out;
  opacity: ${({ $focus }) => ($focus ? "1" : "0")};
`;

export default FocusIndicator;
