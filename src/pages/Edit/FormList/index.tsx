import { useState } from "react";

import styled from "styled-components";
import Question from "./Question";
import Title from "./Subtitle";
import { QuestionType } from "@/types/question";

// TODO: 가장 최근 선택 남기기
const FormList = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([
    {
      id: Date.now(),
      category: "단답형",
      options: ["질문"],
    },
  ]);

  return (
    <FormListContainer>
      <Title />
      {questions.map(({ category, id, options }, index) => (
        <Question
          key={id} //
          index={index}
          category={category}
          options={options}
          questions={questions}
          onSetQuestions={setQuestions}
        />
      ))}
    </FormListContainer>
  );
};

export default FormList;

const FormListContainer = styled.section`
  width: 100%;
  max-width: 760px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
