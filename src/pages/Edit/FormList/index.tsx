import styled from "styled-components";
import Question from "./Question";
import Title from "./Subtitle";
import { useState } from "react";
import { TitleType, QuestionType } from "@/types/question";

// TODO: 가장 최근 선택 남기기
const FormList = () => {
  const [titleInfo, setTitleInfo] = useState<TitleType>({
    title: "",
    description: "",
  });

  const [questionInfo, setQuestionInfo] = useState<QuestionType[]>([
    {
      category: "객관식 질문",
      option: null,
    },
  ]);

  const questionUpdateHandler = (e) => {};

  const titleUpdateHandler = (e) => {};

  return (
    <FormListContainer>
      <Title //
        titleInfo={titleInfo}
        onTitleUpdate={titleUpdateHandler}
      />
      {questionInfo.map(({ option, category }) => (
        <Question //
          category={category}
          option={option}
          onQuestionUpdate={questionUpdateHandler}
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
