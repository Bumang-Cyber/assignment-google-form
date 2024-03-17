import styled from "styled-components";
import Question from "./Question";
import Title from "./Subtitle";

import useQuestion from "@/hooks/useQuestion";

interface FormProps {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: 가장 최근 선택 남기기
const FormList = ({ setIsShow }: FormProps) => {
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
      <SubmitButton onClick={() => setIsShow(true)}>제출</SubmitButton>
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

const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.blue700};
  border-radius: 8px;
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue800};
  }
`;
