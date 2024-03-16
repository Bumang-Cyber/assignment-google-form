import styled from "styled-components";
import { SetStateAction } from "react";

import { type CategoryType } from "@/types/category";
import Short from "./Categories/Short";
import Long from "./Categories/Long";
import Choice from "./Categories/Choice";

import OptionButton from "./OptionButton";
import { QuestionType } from "@/types/question";

interface QuestionProps {
  onSetQuestions: React.Dispatch<SetStateAction<QuestionType[]>>;
  questions: QuestionType[];
  category: CategoryType;
  options: string[];
  index: number;
}

const Question = ({ category, questions, onSetQuestions, options, index }: QuestionProps) => {
  // TODO: EDITING / BLUR 상태 만들기?

  return (
    <Container>
      <Header>
        <TitleInput placeholder="질문" />
        <OptionButton //
          index={index}
          selected={category}
          questions={questions}
          onSetQuestions={onSetQuestions}
        />
      </Header>
      {category === "단답형" && <Short />}
      {category === "장문형" && <Long />}
      {category === "객관식 질문" && (
        <Choice //
          choice={category}
          options={options}
          questions={questions}
          questionIndex={index}
          onSetQuestions={onSetQuestions}
        />
      )}
      {category === "체크박스" && (
        <Choice //
          choice={category}
          options={options}
          questions={questions}
          questionIndex={index}
          onSetQuestions={onSetQuestions}
        />
      )}
      {category === "드롭다운" && (
        <Choice //
          choice={category}
          options={options}
          questions={questions}
          questionIndex={index}
          onSetQuestions={onSetQuestions}
        />
      )}
      <Footer></Footer>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: white;
  padding: 24px 24px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray300};

  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleInput = styled.input`
  background-color: ${({ theme }) => theme.color.gray100};
  width: 70%;
  height: 56px;
  padding: 0 16px;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.blue700};
  }
`;

const Footer = styled.div``;
