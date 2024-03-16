import { MdOutlineShortText } from "react-icons/md";
import styled from "styled-components";
import { CategoriesType, CategoryType } from "@/types/category";

interface MenuProps {
  onChangeCategory: (name: CategoryType) => void;
  onChangeShow: () => void;
  categories: CategoriesType;
}

const OptionMenu = ({ onChangeCategory, onChangeShow, categories }: MenuProps) => {
  const clickMenuHandler = (name: CategoryType) => {
    onChangeCategory(name);
    onChangeShow();
  };

  return (
    <>
      <Backdrop onClick={onChangeShow} />
      <MenuContainer>
        {categories.map(({ name }) => (
          <div onClick={() => clickMenuHandler(name)}>
            <MdOutlineShortText className="icon" />
            <span>{name}</span>
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
