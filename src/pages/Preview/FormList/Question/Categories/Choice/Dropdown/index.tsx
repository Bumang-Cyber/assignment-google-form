import { MdOutlineShortText } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";

import { SetStateAction, useState } from "react";
import styled from "styled-components";
import Menu from "../DropdownMenu";
import { OptionType } from "@/types/question";

interface OptionProps {
  index: number;
  selected: string;
  options: OptionType[];
  setSelected: React.Dispatch<SetStateAction<string>>;
}

const OptionButton = ({ selected, index, options, setSelected }: OptionProps) => {
  const [isShow, setIsShow] = useState(false);

  const changeShowHandler = () => setIsShow((prev) => !prev);

  if (!isShow) {
    return (
      <OptionContainer key={index} onClick={changeShowHandler}>
        <div>
          <MdOutlineShortText className="icon" />
          <span>{selected}</span>
        </div>
        <FaCaretDown />
      </OptionContainer>
    );
  }

  if (isShow) {
    return (
      <Menu
        index={index} //
        onChangeShow={changeShowHandler}
        options={options}
        setSelected={setSelected}
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
  ${({ theme }) => theme.font.body2r};

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
