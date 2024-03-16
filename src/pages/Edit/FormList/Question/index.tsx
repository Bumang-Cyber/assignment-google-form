import styled from "styled-components";
import { type CategoryType } from "@/types/category";

import FocusIndicator from "@/components/FocusIndicator";
import useFocus from "@/hooks/useFocus";
import OptionButton from "./OptionButton";
import Body from "./Body";
import Footer from "./Footer";

interface QuestionProps {
  category: CategoryType;
  options: string[];
  index: number;
}

const Question = ({ category, options, index }: QuestionProps) => {
  const { focus, focusHandler } = useFocus();

  return (
    <Container onFocus={focusHandler} onBlur={focusHandler}>
      <FocusIndicator focus={focus} />
      <Header>
        <TitleInput placeholder="질문" />
        <OptionButton //
          index={index}
          selected={category}
        />
      </Header>
      <Body //
        category={category}
        options={options}
        index={index}
      />
      <Footer //
        index={index}
      />
    </Container>
  );
};

export default Question;

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: white;
  padding: 24px 24px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray300};

  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleInput = styled.input`
  background-color: ${({ theme }) => theme.color.gray100};
  width: 70%;
  height: 56px;
  padding: 0 16px;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.blue700};
  }
`;
