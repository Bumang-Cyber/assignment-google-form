import { OptionType } from "@/types/question";
import { SetStateAction } from "react";
import { MdOutlineShortText } from "react-icons/md";
import styled from "styled-components";

interface MenuProps {
  index: number;
  onChangeShow: () => void;
  options: OptionType[];
  setSelected: React.Dispatch<SetStateAction<string>>;
}

const OptionMenu = ({ onChangeShow, options, setSelected }: MenuProps) => {
  const clickHandler = (item: string) => {
    setSelected(item);
    onChangeShow();
  };

  return (
    <>
      <Backdrop onClick={onChangeShow} />
      <MenuContainer>
        {options.map((item, i) => (
          <div key={i} onClick={() => clickHandler(item.content)}>
            <MdOutlineShortText className="icon" />
            <span>{item.content}</span>
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

  z-index: 1;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.font.body2r};

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
