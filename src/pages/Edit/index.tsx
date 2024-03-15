import styled from "styled-components";
import AddButton from "@/components/AddButton";
import FormList from "./FormList";

const Edit = () => {
  return (
    <EditContainer>
      <FormList />
      <AddButton />
    </EditContainer>
  );
};

export default Edit;

const EditContainer = styled.main`
  width: 100%;
  max-width: 800px;
  height: 100%;

  display: flex;
  gap: 16px;

  padding: 24px 0;
`;
