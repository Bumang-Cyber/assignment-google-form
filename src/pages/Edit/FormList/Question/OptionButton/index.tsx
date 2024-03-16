import { MdOutlineShortText } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
import styled from "styled-components";
import { SetStateAction, useState } from "react";
import Menu from "../OptionMenu";
import { type CategoryType, categories } from "@/types/category";
import { QuestionType } from "@/types/question";

interface OptionProps {
  index: number;
  selected: CategoryType;
  questions: QuestionType[];
  onSetQuestions: React.Dispatch<SetStateAction<QuestionType[]>>;
}

const OptionButton = ({ selected, questions, onSetQuestions, index }: OptionProps) => {
  const [isShow, setIsShow] = useState(false);

  const changeShowHandler = () => setIsShow((prev) => !prev);

  if (!isShow) {
    return (
      <>
        {categories.map(
          (category) =>
            category === selected && (
              <OptionContainer onClick={changeShowHandler}>
                <div>
                  <MdOutlineShortText className="icon" />
                  <span>{category}</span>
                </div>
                <FaCaretDown />
              </OptionContainer>
            )
        )}
      </>
    );
  }

  if (isShow) {
    return (
      <Menu
        index={index} //
        onSetQuestions={onSetQuestions}
        questions={questions}
        onChangeShow={changeShowHandler}
      />
    );
  }
};

export default OptionButton;

const OptionContainer = styled.button`
  width: 180px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray400};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 8px;

  color: ${({ theme }) => theme.color.gray700};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    font-size: 24px;
  }
`;
