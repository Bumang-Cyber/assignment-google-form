import { type CategoryType, categories } from "@/types/category";

import { MdOutlineShortText } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";

import { useState } from "react";
import styled from "styled-components";
import Menu from "../OptionMenu";

interface OptionProps {
  index: number;
  selected: CategoryType;
}

const OptionButton = ({ selected, index }: OptionProps) => {
  const [isShow, setIsShow] = useState(false);

  const changeShowHandler = () => setIsShow((prev) => !prev);

  if (!isShow) {
    return (
      <>
        {categories.map(
          (category) =>
            category === selected && (
              <OptionContainer key={index} onClick={changeShowHandler}>
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
