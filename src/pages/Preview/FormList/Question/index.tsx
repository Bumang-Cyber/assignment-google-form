import styled from "styled-components";
import { type CategoryType } from "@/types/category";

import Body from "./Body";
import { FiAlertCircle } from "react-icons/fi";
import { OptionType } from "@/types/question";

interface QuestionProps {
  category: CategoryType;
  options: OptionType[];
  index: number;
  required: boolean;
  title: string;
}

const Question = ({ category, options, index, required, title }: QuestionProps) => {
  return (
    <Container>
      <Header>
        <TitleInput placeholder="질문" value={title} disabled />
      </Header>
      <Body //
        category={category}
        options={options}
        index={index}
      />
      {required && (
        <Required>
          <FiAlertCircle />
          필수 항목 입니다.
        </Required>
      )}
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
  ${({ theme }) => theme.font.body2b}

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
  width: 100%;
  height: 56px;
  background-color: white;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.blue700};
  }
`;

const Required = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: tomato;
  ${({ theme }) => theme.font.body3r}
`;
