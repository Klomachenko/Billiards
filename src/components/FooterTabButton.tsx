import styled from '@emotion/styled';
import React from 'react';

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
}

const FooterTabButton = ({ text, Icon }: FooterTabButtonProps) => {
  return (
    <ButtonBox>
      <Icon fontSize='large' />
      <SubText>{text}</SubText>
    </ButtonBox>
  );
};

export default FooterTabButton;
