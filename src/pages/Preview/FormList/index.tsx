import styled from "styled-components";
import Question from "./Question";
import Title from "./Subtitle";

import useQuestion from "@/hooks/useQuestion";

// TODO: 가장 최근 선택 남기기
const FormList = () => {
  const { currentQuestions } = useQuestion();

  return (
    <FormListContainer>
      <Title />
      {currentQuestions.map(({ category, id, options, required, title }, index) => (
        <Question
          key={id} //
          index={index}
          category={category}
          options={options}
          required={required}
          title={title}
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
