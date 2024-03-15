import { MdOutlineShortText } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
import styled from "styled-components";
import { useState } from "react";
import Menu from "../OptionMenu";
import { CategoriesType, Category } from "@/types/category";

interface OptionProps {
  onChangeCategory: (name: Category) => void;
  categories: CategoriesType;
}

const OptionButton = ({ onChangeCategory, categories }: OptionProps) => {
  const [isShow, setIsShow] = useState(false);

  const changeShowHandler = () => setIsShow((prev) => !prev);

  if (!isShow) {
    return (
      <>
        {categories.map(
          ({ name, select }) =>
            select === true && (
              <OptionContainer onClick={changeShowHandler}>
                <div>
                  <MdOutlineShortText className="icon" />
                  <span>{name}</span>
                </div>
                <FaCaretDown />
              </OptionContainer>
            )
        )}
      </>
    );
  }

  if (isShow) {
    return <Menu categories={categories} onChangeCategory={onChangeCategory} onChangeShow={changeShowHandler} />;
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
