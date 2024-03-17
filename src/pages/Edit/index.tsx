import styled from "styled-components";
import AddButton from "@/components/AddButton";
import FormList from "./FormList";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import useQuestion from "@/hooks/useQuestion";
import { deepCopy } from "@/utils/deepCopy";

const Edit = () => {
  const { currentQuestions, changeQuestionHandler } = useQuestion();

  const onDragEnd = ({ destination, source, type }: DropResult) => {
    if (!destination) return; // 드래그를 취소한 경우
    const newItems = deepCopy(currentQuestions);
    console.log(type, "type");

    if (type === "question-droppable") {
      const [reorderedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, reorderedItem);

      changeQuestionHandler(newItems);
    }

    if (type === "option-droppable") {
      const copyDestination = deepCopy(destination);
      const split = copyDestination.droppableId.split("-");
      console.log(split, "split");
      const droppableIndex = +split[1];

      const [reorderedItem] = newItems[droppableIndex].options.splice(source.index, 1);
      newItems[droppableIndex].options.splice(copyDestination.index, 0, reorderedItem);
      changeQuestionHandler(newItems);
    }
  };

  return (
    <EditContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <FormList />
      </DragDropContext>
      <AddButton />
    </EditContainer>
  );
};

export default Edit;

const EditContainer = styled.main`
  width: 100%;
  max-width: 800px;
  height: 100%;

  display: flex;
  gap: 16px;
  margin-bottom: 180px;

  @media only screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;
