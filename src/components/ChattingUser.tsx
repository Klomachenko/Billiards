import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';

const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SubText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
`;

const Message = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
  color: #5a5a5a;
`;

const ReadCountBox = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.75rem;
  background-color: #61ad6f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-weight: 500;
  border-radius: 50%;
  position: absolute;
  right: 0;
  margin-right: 0.5rem;
`;

interface ChattingUserProps {
  lastMessage: string;
  otherPerson: string;
  unReadCount: number;
  onClick: React.MouseEventHandler;
}

const ChattingUser = ({
  lastMessage,
  otherPerson,
  unReadCount,
  onClick,
}: ChattingUserProps) => {
  return (
    <UserBox onClick={onClick}>
      <AccountCircleIcon fontSize='large' />
      <TextBox>
        <SubText>{otherPerson}</SubText>
        <Message>{lastMessage}</Message>
      </TextBox>
      {/* <ReadCountBox>{unReadCount}</ReadCountBox> -> 언리드카운트 현재 에러, 추후 수정필요 */}
      {unReadCount !== 0 ? <ReadCountBox /> : null}
    </UserBox>
  );
};

export default ChattingUser;
