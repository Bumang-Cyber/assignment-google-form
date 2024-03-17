import usePreview from "@/hooks/usePreview";

import styled from "styled-components";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isShow } = usePreview();

  return (
    <LayoutContainer>
      {isShow && <Header />}
      {children}
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  margin-top: 96px;
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
`;
