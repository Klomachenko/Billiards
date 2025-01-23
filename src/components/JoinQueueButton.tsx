import styled from '@emotion/styled';
import React from 'react';

const JoinButton = styled.button`
  height: 3.25rem;
  width: 3.25rem;
  border-radius: 50%;
  border: 3px solid white;
  color: white;
  background-color: #90d19c;
  cursor: pointer;
`;

const SubText = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
`;

interface JoinQueueButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const JoinQueueButton = ({ onClick }: JoinQueueButtonProps) => {
  return (
    <JoinButton onClick={onClick}>
      <SubText>+</SubText>
    </JoinButton>
  );
};

export default JoinQueueButton;
