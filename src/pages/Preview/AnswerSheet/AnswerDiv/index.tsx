import { QuestionType } from "@/types/question";
import styled from "styled-components";

interface AnswerProps {
  question: QuestionType;
  index: number;
}

const AnswerDiv = ({ question, index }: AnswerProps) => {
  const localAnswer = localStorage.getItem(`answer-${index}`);
  const { title } = question;
  return (
    <Container>
      <QuestionTitle>{`${index + 1}. ${title ? title : "-"}`}</QuestionTitle>
      <Answer>{localAnswer}</Answer>
    </Container>
  );
};

export default AnswerDiv;

const Container = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray400};
`;

const QuestionTitle = styled.div`
  ${({ theme }) => theme.font.subtitle4}
`;

const Answer = styled.div`
  padding: 8px 4px;
  ${({ theme }) => theme.font.body2r}
  color: ${({ theme }) => theme.color.gray700}
`;
