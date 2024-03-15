import styled from "styled-components";
import { useState } from "react";

import { type Category } from "../../../../types/category";
import { CategoriesType } from "../../../../types/category";
import Short from "./Categories/Short";
import Long from "./Categories/Long";
import Choice from "./Categories/Choice";
import Check from "./Categories/Check";
import DropDown from "./Categories/DropDown";

import OptionButton from "./OptionButton";

const Question = () => {
  // TODO: EDITING / BLUR 상태 만들기?
  const [categories, setCategories] = useState<CategoriesType>([
    { name: "단답형", select: true, component: <Short /> },
    { name: "장문형", select: false, component: <Long /> },
    { name: "객관식 질문", select: false, component: <Choice /> },
    { name: "체크박스", select: false, component: <Check /> },
    { name: "드롭다운", select: false, component: <DropDown /> },
  ]);

  const optionChangeHandler = (name: Category) => {
    const temp = [];
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === name) {
        categories[i].select = true;
        temp.push(categories[i]);
      } else {
        categories[i].select = false;
        temp.push(categories[i]);
      }
    }

    setCategories(temp);
  };

  return (
    <Container>
      <Header>
        <TitleInput placeholder="질문" />
        <OptionButton categories={categories} onChangeCategory={optionChangeHandler} />
      </Header>
      {categories.map(({ select, component }) => select && component)}
      <Footer></Footer>
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

const Footer = styled.div``;
