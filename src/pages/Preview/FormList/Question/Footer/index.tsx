import styled from "styled-components";
import Toggle from "@/components/Toggle";

interface FooterProps {
  index: number;
}

const Footer = ({ index }: FooterProps) => {
  return (
    <FooterContainer>
      <Divider />
      <Required>
        <Toggle index={index} />
      </Required>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.gray400};
  height: 48px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  margin-top: 16px;
`;

const Divider = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.gray400};
`;

const Required = styled.div``;
