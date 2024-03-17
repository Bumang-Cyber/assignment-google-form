import useQuestion from "@/hooks/useQuestion";
import { useState } from "react";
import styled, { css } from "styled-components";

interface ToggleProps {
  index: number;
}

function Toggle({ index }: ToggleProps) {
  const { setRequiredByIndexHandler, currentQuestions } = useQuestion();
  const [toggle, setToggle] = useState(() => currentQuestions[index].required);

  const clickedToggle = () => {
    const current = currentQuestions[index].required;
    if (current) {
      setToggle(false);
    } else {
      setToggle(true);
    }

    setRequiredByIndexHandler(!current, index);
  };

  return (
    <Wrapper>
      <Title>필수</Title>
      <ToggleBtn onClick={clickedToggle} $toggle={toggle}>
        <Circle $toggle={toggle} />
      </ToggleBtn>
    </Wrapper>
  );
}
export default Toggle;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Title = styled.div`
  ${({ theme }) => theme.font.body3r};
  color: ${({ theme }) => theme.color.gray700};
`;

const ToggleBtn = styled.button<{ $toggle: boolean }>`
  width: 48px;
  height: 25px;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.$toggle ? "lightGray" : "rgb(51,30,190)")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.div<{ $toggle: boolean }>`
  background-color: white;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  position: absolute;
  left: 4px;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$toggle &&
    css`
      transform: translate(22px, 0);
      transition: all 0.2s ease-in-out;
    `}
`;
