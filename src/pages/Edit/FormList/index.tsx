import styled from "styled-components";
import Question from "./Question";
import Title from "./Subtitle";

import { Droppable } from "@hello-pangea/dnd";
import useQuestion from "@/hooks/useQuestion";

const FormList = () => {
  const { currentQuestions } = useQuestion();

  return (
    <Droppable droppableId="question-droppable" type="question-droppable">
      {(provided) => (
        <FormListContainer ref={provided.innerRef} {...provided.droppableProps}>
          <Title />
          {currentQuestions.map(({ category, id, options, title }, index) => (
            <Question
              key={id} //
              index={index}
              category={category}
              options={options}
              title={title}
              id={id}
            />
          ))}
          {provided.placeholder}
        </FormListContainer>
      )}
    </Droppable>
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
