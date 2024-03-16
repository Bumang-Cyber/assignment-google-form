import styled from "styled-components";
import useQuestion from "@/hooks/useQuestion";
import { BiPlusCircle } from "react-icons/bi";

const AddButton = () => {
  const { pushQuestionHandler } = useQuestion();

  return (
    <ButtonContainer onClick={() => pushQuestionHandler({ id: Date.now(), title: "", category: "단답형", options: ["옵션 1"], required: false })}>
      <div>
        <BiPlusCircle className="add" />
      </div>
    </ButtonContainer>
  );
};

export default AddButton;

const ButtonContainer = styled.div`
  width: 64px;
  height: 64px;
  background-color: white;

  border-radius: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray400};

  ${({ theme }) => theme.font.subtitle3}
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  & div:hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;
