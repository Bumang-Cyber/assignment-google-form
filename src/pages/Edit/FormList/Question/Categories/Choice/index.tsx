import Input from "@/components/Input";
import useQuestion from "@/hooks/useQuestion";
import { type ChoiceCategory } from "@/types/category";
import { deepCopy } from "@/utils/deepCopy";
import { Draggable, Droppable } from "@hello-pangea/dnd";

import { useState } from "react";
import { BiPlus as PlusIcon } from "react-icons/bi";
import { CgClose as CloseIcon } from "react-icons/cg";
import { MdOutlineDragIndicator as DragIcon } from "react-icons/md";

import styled from "styled-components";

interface ChoiceProps {
  choice: ChoiceCategory;
  options: string[];
  questionIndex: number;
}
useState;
const Choice = ({ choice, options, questionIndex }: ChoiceProps) => {
  const { currentQuestions, changeQuestionHandler } = useQuestion();

  const onChangeHandler = (str: string, index: number | undefined) => {
    if (index === undefined) return;
    const optionsCopy = [...options];
    optionsCopy[index] = str;

    const questionsCopy = deepCopy(currentQuestions);
    questionsCopy[questionIndex]["options"] = optionsCopy;

    changeQuestionHandler(questionsCopy);
  };

  const onAddHandler = () => {
    const order = options.length + 1;
    const optionsCopy = [...options, `옵션 ${order}`];

    console.log(optionsCopy, "optionsCopy");
    const questionsCopy = deepCopy(currentQuestions);
    console.log(questionsCopy, "questionsCopy");
    questionsCopy[questionIndex].options = optionsCopy;
    console.log(questionsCopy, "questionsCopy");
    changeQuestionHandler(questionsCopy);
  };

  const onDeleteHandler = (index: number | undefined) => {
    if (index === undefined) return;
    const optionsCopy = [...options];
    console.log(optionsCopy, "optionsCopy");
    const filtered = optionsCopy.filter((_, i) => i !== index);
    console.log(filtered, "filtered");

    const questionsCopy = deepCopy(currentQuestions);
    questionsCopy[questionIndex].options = filtered;

    changeQuestionHandler(questionsCopy);
  };

  const onCheckRadio = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.checked = false;
  };

  return (
    <Droppable droppableId={`innerDroppable-${Math.random()}`} type="option-droppable">
      {(innerProvided) => (
        <ChoiceList ref={innerProvided.innerRef} {...innerProvided.droppableProps}>
          {options.map((option, i) => (
            <Draggable key={i} draggableId={`${questionIndex}-inner-draggable${i}`} index={i}>
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
                    value={option}
                  />
                  <CloseIcon className="icon" onClick={() => onDeleteHandler(i)} />
                </ChoiceContainer>
              )}
            </Draggable>
          ))}
          <AddContainer onClick={onAddHandler} className="add-button">
            <PlusIcon />
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
  bottom: 72px;
`;

const AddText = styled.div`
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  transform: translateX(-1px);
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
