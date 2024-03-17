import styled from "styled-components";
import { CategoryType, categories } from "@/types/category";
import useQuestion from "@/hooks/useQuestion";
import { deepCopy } from "@/utils/deepCopy";

import { MdOutlineShortText as ShortIcon } from "react-icons/md";
import { LuText as LongIcon } from "react-icons/lu";
import { FaRegCheckSquare as CheckIcon } from "react-icons/fa";
import { IoIosArrowDropdown as DropIcon } from "react-icons/io";
import { IoMdRadioButtonOn as RadioIcon } from "react-icons/io";

interface MenuProps {
  onChangeShow: () => void;
  index: number;
}

const OptionMenu = ({ onChangeShow, index }: MenuProps) => {
  const { currentQuestions, changeQuestionHandler } = useQuestion();

  const clickMenuHandler = (name: CategoryType) => {
    const questionCopy = deepCopy(currentQuestions);
    questionCopy[index]["category"] = name;
    changeQuestionHandler(questionCopy);
    onChangeShow();
  };

  return (
    <>
      <Backdrop onClick={onChangeShow} />
      <MenuContainer>
        {categories.map((category: CategoryType, i) => (
          <div key={i} onClick={() => clickMenuHandler(category)}>
            {category === "단답형" && <ShortIcon className="icon" />}
            {category === "장문형" && <LongIcon className="icon" />}
            {category === "체크박스" && <CheckIcon className="icon" />}
            {category === "드롭다운" && <DropIcon className="icon" />}
            {category === "객관식 질문" && <RadioIcon className="icon" />}
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
  ${({ theme }) => theme.font.body3r};

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
