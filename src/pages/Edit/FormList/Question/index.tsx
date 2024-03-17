import styled from "styled-components";
import { type CategoryType } from "@/types/category";
import { deepCopy } from "@/utils/deepCopy";

import FocusIndicator from "@/components/FocusIndicator";
import useFocus from "@/hooks/useFocus";
import OptionButton from "./OptionButton";
import Body from "./Body";
import Footer from "./Footer";
import useQuestion from "@/hooks/useQuestion";

interface QuestionProps {
  category: CategoryType;
  options: string[];
  index: number;
  title: string;
}

const Question = ({ category, options, index, title }: QuestionProps) => {
  const { focus, focusHandler } = useFocus();
  const { currentQuestions, changeQuestionHandler } = useQuestion();

  const titleChangeHandler = (str: string) => {
    const copy = deepCopy(currentQuestions);
    console.log(copy);
    copy[index].title = str;
    changeQuestionHandler(copy);
  };

  return (
    <Container onFocus={focusHandler} onBlur={focusHandler}>
      <FocusIndicator focus={focus} />
      <Header>
        <TitleInput placeholder="질문" value={title} onChange={(e) => titleChangeHandler(e.target.value)} />
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
  background-color: white;
  width: 70%;
  height: 56px;
  transition: all 0.2s ease-in-out;

  &:hover {
    padding: 0 16px;
    background-color: ${({ theme }) => theme.color.gray100};
    border-bottom: 2px solid ${({ theme }) => theme.color.blue700};
  }

  &:focus {
    padding: 0 16px;
    background-color: ${({ theme }) => theme.color.gray100};
    border-bottom: 2px solid ${({ theme }) => theme.color.blue700};
  }
`;
