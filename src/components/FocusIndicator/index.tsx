import styled from "styled-components";

const FocusIndicator = () => {
  return <FocusContainer />;
};

const FocusContainer = styled.div`
  width: 8px;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.color.blue800};
  z-index: 1;
`;

export default FocusIndicator;
