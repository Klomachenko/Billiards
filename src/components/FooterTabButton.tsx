import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid black;
  cursor: pointer;
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

interface FooterTabButtonProps {
  Icon: React.ElementType;
  text: string;
  url: string;
}

const FooterTabButton = ({ text, Icon, url }: FooterTabButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${url}`);
  };

  return (
    <ButtonBox onClick={handleClick}>
      <Icon fontSize='large' />
      <SubText>{text}</SubText>
    </ButtonBox>
  );
};

export default FooterTabButton;
