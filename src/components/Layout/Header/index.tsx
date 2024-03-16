import styled from "styled-components";
import useQuestion from "@/hooks/useQuestion";
import { IoIosEye } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const Header = () => {
  const { resetAllHandler } = useQuestion();

  const deleteHandler = () => {
    const accept = confirm("정말 모든 양식을 삭제하시겠습니까?");
    if (!accept) return;
    resetAllHandler();
  };

  return (
    <HeaderContainer>
      <PreviewButton>
        <a href="/preview" target="_blank">
          <IoIosEye className="icon" />
        </a>
      </PreviewButton>
      <DeleteButton onClick={deleteHandler}>
        <RiDeleteBin6Line className="icon" />
      </DeleteButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray300};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const DeleteButton = styled.div`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  .icon {
    font-size: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;

const PreviewButton = styled.div`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  .icon {
    font-size: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;
