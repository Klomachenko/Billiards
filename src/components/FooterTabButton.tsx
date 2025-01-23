import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonBox = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  cursor: pointer;
  text-decoration: none;
  color: black;
  background-color: #bbefc5;
`;

const SubText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

interface FooterTabButtonProps {
  Icon: React.ElementType;
  text: string;
  url: string;
}

const FooterTabButton = ({ text, Icon, url }: FooterTabButtonProps) => {
  return (
    <ButtonBox to={`/${url}`}>
      <Icon fontSize='medium' />
      <SubText>{text}</SubText>
    </ButtonBox>
  );
};

export default FooterTabButton;
