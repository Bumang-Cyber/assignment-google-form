import { MdOutlineShortText } from "react-icons/md";
import styled from "styled-components";
import { CategoryType, categories } from "@/types/category";
import { SetStateAction } from "react";
import { QuestionType } from "@/types/question";

interface MenuProps {
  onSetQuestions: React.Dispatch<SetStateAction<QuestionType[]>>;
  questions: QuestionType[];
  index: number;
  onChangeShow: () => void;
}

const OptionMenu = ({ onChangeShow, onSetQuestions, questions, index }: MenuProps) => {
  const clickMenuHandler = (name: CategoryType) => {
    const questionCopy = [...questions];
    questionCopy[index]["category"] = name;
    onSetQuestions(questionCopy);
    onChangeShow();
  };

  return (
    <>
      <Backdrop onClick={onChangeShow} />
      <MenuContainer>
        {categories.map((category: CategoryType) => (
          <div onClick={() => clickMenuHandler(category)}>
            <MdOutlineShortText className="icon" />
            <span>{category}</span>
          </div>
        ))}
      </MenuContainer>
    </>
  );
};

export default OptionMenu;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
`;

const MenuContainer = styled.div`
  width: 180px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
  padding: 8px 0;

  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 1;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
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

    &:hover {
      background-color: ${({ theme }) => theme.color.gray100};
    }
  }
`;
