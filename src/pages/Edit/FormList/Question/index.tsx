import styled from "styled-components";
import { type CategoryType } from "@/types/category";
import { deepCopy } from "@/utils/deepCopy";
import { MdOutlineDragIndicator as Drag } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";
import { OptionType } from "@/types/question";

import FocusIndicator from "@/components/FocusIndicator";
import useFocus from "@/hooks/useFocus";
import OptionButton from "./OptionButton";
import Body from "./Body";
import Footer from "./Footer";
import useQuestion from "@/hooks/useQuestion";

interface QuestionProps {
  category: CategoryType;
  options: OptionType[];
  index: number;
  title: string;
  id: number;
}

const Question = ({ category, options, index, title, id }: QuestionProps) => {
  const { focus, focusHandler, blurHandler } = useFocus();
  const { currentQuestions, changeQuestionHandler } = useQuestion();
  const draggableId = id.toString();

  const titleChangeHandler = (str: string) => {
    const copy = deepCopy(currentQuestions);
    console.log(copy);
    copy[index].title = str;
    changeQuestionHandler(copy);
  };

  return (
    <Draggable draggableId={`draggable-${draggableId}`} index={index}>
      {(provided) => (
        <Container //
          onFocus={focusHandler}
          onBlur={blurHandler}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <FocusIndicator focus={focus} />
          <DragContainer {...provided.dragHandleProps}>
            <DragIcon />
          </DragContainer>
          <Header>
            <TitleInput //
              placeholder="질문"
              value={title}
              onChange={(e) => titleChangeHandler(e.target.value)}
            />
            <OptionButton //
              index={index}
              selected={category}
            />
          </Header>
          <Body //
            category={category}
            options={options}
            index={index}
          />
          <Footer //
            index={index}
          />
        </Container>
      )}
    </Draggable>
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
  background-color: white;
  width: 70%;
  height: 56px;
  transition: all 0.2s ease-in-out;

  &:hover {
    padding: 0 16px;
    background-color: ${({ theme }) => theme.color.gray100};
    border-bottom: 2px solid ${({ theme }) => theme.color.blue700};
  }

  &:focus {
    padding: 0 16px;
    background-color: ${({ theme }) => theme.color.gray100};
    border-bottom: 2px solid ${({ theme }) => theme.color.blue700};
  }
`;

const DragContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;

  height: 20px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.draggable}
`;

const DragIcon = styled(Drag)`
  transform: rotate(90deg);
  font-size: 24px;
  color: ${({ theme }) => theme.color.gray400};

  &:hover {
    color: ${({ theme }) => theme.color.gray700};
  }
`;
