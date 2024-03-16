import styled from "styled-components";
import FormList from "./FormList";

const Preview = () => {
  return (
    <PreviewContainer>
      <FormList />
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
`;
