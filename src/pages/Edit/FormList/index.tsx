import styled from "styled-components";
import Question from "../../../components/Question";
import Title from "../../../components/TItle";
import { useState } from "react";

// TODO: 가장 최근 선택 남기기
const FormList = () => {
  const [titleInfo, setTitleInfo] = useState();
  const [questionInfo, setQuestionInfo] = useState();

  return (
    <FormListContainer>
      <Title></Title>
      <Question></Question>
      <Question></Question>
      <Question></Question>
      <Question></Question>
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
