import styled from "styled-components";
import FormList from "./FormList";
import AnswerSheet from "./AnswerSheet";
import { useState } from "react";

const Preview = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <PreviewContainer>
      <FormList setIsShow={setIsShow} />
      <AnswerSheet isShow={isShow} setIsShow={setIsShow} />
    </PreviewContainer>
  );
};

export default Preview;

const PreviewContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 24px 0;
  margin-bottom: 180px;
  @media only screen and (max-width: 768px) {
    padding: 24px 24px;
  }
`;
