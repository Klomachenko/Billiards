import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonBox = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid black;
  cursor: pointer;
  text-decoration: none;
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
  return (
    <ButtonBox to={`/${url}`}>
      <Icon fontSize='large' />
      <SubText>{text}</SubText>
    </ButtonBox>
  );
};

export default FooterTabButton;
