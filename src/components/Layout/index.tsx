import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: aliceblue;

  display: flex;
  justify-content: center;
`;
