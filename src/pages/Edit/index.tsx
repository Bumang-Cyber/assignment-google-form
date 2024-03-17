import styled from "styled-components";
import AddButton from "@/components/AddButton";
import FormList from "./FormList";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import useQuestion from "@/hooks/useQuestion";

const Edit = () => {
  const { currentQuestions, changeQuestionHandler } = useQuestion();

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return; // 드래그를 취소한 경우

    const newItems = [...currentQuestions];
    const [reorderedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, reorderedItem);

    changeQuestionHandler(newItems);
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

  padding: 24px 0;
`;
