import styled from "styled-components";
import Input from "@/components/Input";
import FocusIndicator from "@/components/FocusIndicator";
import useFocus from "@/hooks/useFocus";
import { useState } from "react";

const Title = () => {
  const { focus, focusHandler, blurHandler } = useFocus();

  const [title, setTitle] = useState(() => localStorage.getItem("form-title") || "");
  const [description, setDescription] = useState(() => localStorage.getItem("form-description") || "");

  const titleChangeHandler = (str: string, i: number | undefined) => {
    if (i === 0) {
      setTitle(str);
    } else {
      setDescription(str);
    }
  };

  return (
    <Container onFocus={focusHandler} onBlur={blurHandler}>
      <HeadDecoration />
      <FocusIndicator focus={focus} />
      <Input type="title" placeHolder="제목 없는 설문지" onChange={titleChangeHandler} index={0} value={title} />
      <Input placeHolder="설문지 설명" onChange={titleChangeHandler} index={1} value={description} />
    </Container>
  );
};

export default Title;

const Container = styled.div`
  width: 100%;
  min-height: 140px;
  background-color: white;
  position: relative;

  border-radius: 8px;
  padding: 24px 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  border: 1px solid ${({ theme }) => theme.color.gray300};
`;

const HeadDecoration = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.blue700};
  position: absolute;
  left: 0;
  top: 0;

  border-radius: 8px 8px 0 0;
  z-index: 2;
`;
