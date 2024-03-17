import styled from "styled-components";
import { CgClose as CloseIcon } from "react-icons/cg";
import useQuestion from "@/hooks/useQuestion";
import AnswerDiv from "./AnswerDiv";
import { useEffect } from "react";

interface AnswerProps {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnswerSheet = ({ isShow, setIsShow }: AnswerProps) => {
  const { currentQuestions } = useQuestion();

  useEffect(() => {
    currentQuestions.forEach((_, i) => {
      localStorage.setItem(`answer-${i}`, "");
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isShow && (
        <Backdrop onClick={() => setIsShow(false)}>
          <SheetContainer>
            <Header>
              <CloseIcon className="close" onClick={() => setIsShow(false)} />
              <span>사용자 응답</span>
            </Header>
            {currentQuestions.map((question, i) => (
              <AnswerDiv question={question} index={i} />
            ))}
          </SheetContainer>
        </Backdrop>
      )}
    </>
  );
};

export default AnswerSheet;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0;

  span {
    ${({ theme }) => theme.font.body1b};
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;
`;

const SheetContainer = styled.div`
  width: 400px;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;

  padding: 24px;

  .close {
    font-size: 24px;
    transform: translateX(-4px);
  }

  .close:hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;
