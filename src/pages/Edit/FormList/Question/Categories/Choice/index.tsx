import Input from "@/components/Input";
import useQuestion from "@/hooks/useQuestion";
import { type ChoiceCategory } from "@/types/category";
import { OptionType } from "@/types/question";
import { deepCopy } from "@/utils/deepCopy";
import { Draggable, Droppable } from "@hello-pangea/dnd";

import { useState } from "react";
import { CgClose as CloseIcon } from "react-icons/cg";
import { MdOutlineDragIndicator as DragIcon } from "react-icons/md";
import styled from "styled-components";

interface ChoiceProps {
  choice: ChoiceCategory;
  options: OptionType[];
  questionIndex: number;
}
useState;
const Choice = ({ choice, options, questionIndex }: ChoiceProps) => {
  const { currentQuestions, changeQuestionHandler } = useQuestion();

  const onChangeHandler = (str: string, index: number | undefined) => {
    if (index === undefined) return;
    const optionsCopy = deepCopy(options);
    optionsCopy[index].content = str;
    console.log(optionsCopy, "optionsCopy");

    const questionsCopy = deepCopy(currentQuestions);
    questionsCopy[questionIndex]["options"] = optionsCopy;

    changeQuestionHandler(questionsCopy);
  };

  const onAddHandler = () => {
    const order = options.length + 1;
    const optionsCopy = [...options, { id: Date.now(), content: `옵션 ${order}` }];

    const questionsCopy = deepCopy(currentQuestions);
    questionsCopy[questionIndex]["options"] = optionsCopy;
    changeQuestionHandler(questionsCopy);
  };

  const onDeleteHandler = (index: number | undefined) => {
    if (index === undefined) return;
    const optionsCopy = [...options];
    const filtered = optionsCopy.filter((_, i) => i !== index);

    const questionsCopy = deepCopy(currentQuestions);
    questionsCopy[questionIndex]["options"] = filtered;

    changeQuestionHandler(questionsCopy);
  };

  const onCheckRadio = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.checked = false;
  };

  return (
    <Droppable droppableId={`innerDroppable-${questionIndex}`} type="option-droppable">
      {(innerProvided) => (
        <ChoiceList ref={innerProvided.innerRef} {...innerProvided.droppableProps}>
          {options.map((option, i) => (
            <Draggable key={option.id} draggableId={`inner-draggable${option.id}`} index={i}>
              {(innerProvided) => (
                <ChoiceContainer //
                  ref={innerProvided.innerRef}
                  {...innerProvided.draggableProps}
                >
                  <Drag className="drag-handle" {...innerProvided.dragHandleProps}>
                    <DragIcon />
                  </Drag>
                  {choice === "객관식 질문" && <input type="radio" onClick={onCheckRadio} />}
                  {choice === "체크박스" && <input type="checkbox" onClick={onCheckRadio} />}
                  {choice === "드롭다운" && <Index> {i + 1} </Index>}
                  <Input //
                    index={i}
                    onChange={onChangeHandler}
                    placeHolder="옵션"
                    value={option.content}
                  />
                  <CloseIcon className="icon" onClick={() => onDeleteHandler(i)} />
                </ChoiceContainer>
              )}
            </Draggable>
          ))}
          <AddContainer onClick={onAddHandler} className="add-button">
            <input type="radio" onClick={onCheckRadio} />
            <AddText>옵션 추가</AddText>
          </AddContainer>
          {innerProvided.placeholder}
        </ChoiceList>
      )}
    </Droppable>
  );
};

export default Choice;

const ChoiceList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .drag-handle {
    opacity: 0;
  }

  &:hover .drag-handle {
    opacity: 1;
  }
`;

const ChoiceContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;

  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  ${({ theme }) => theme.font.body3r}
  color: ${({ theme }) => theme.color.gray700};

  .icon {
    font-size: 24px;
  }

  .icon:hover {
    color: black;
  }
`;

const AddContainer = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  ${({ theme }) => theme.font.body3r}
  color: ${({ theme }) => theme.color.gray700};

  position: absolute;
  bottom: 58px;
`;

const AddText = styled.div`
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const Index = styled.div`
  width: 14px;
`;

const Drag = styled.div`
  width: 20px;
  height: 100%;

  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 24px;
  color: ${({ theme }) => theme.color.gray400};

  left: -20px;
`;
