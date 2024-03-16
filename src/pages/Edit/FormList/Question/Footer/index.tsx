import styled from "styled-components";
import Toggle from "@/components/Toggle";
import useQuestion from "@/hooks/useQuestion";

import { FaRegCopy } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

interface FooterProps {
  index: number;
}

const Footer = ({ index }: FooterProps) => {
  const { copyByIndexHandler, deleteByIndexHandler } = useQuestion();

  return (
    <FooterContainer>
      <Copy onClick={() => copyByIndexHandler(index)}>
        <FaRegCopy />
      </Copy>
      <Delete onClick={() => deleteByIndexHandler(index)}>
        <RiDeleteBin6Line />
      </Delete>
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

const Copy = styled.button`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 20px;

  &:hover {
    color: black;
  }
`;

const Delete = styled.button`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 22px;

  &:hover {
    color: black;
  }
`;

const Divider = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.gray400};
`;

const Required = styled.div``;
