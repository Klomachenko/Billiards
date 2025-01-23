import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MatchingButton from './MatchingButton.tsx';
import { useNavigate } from 'react-router-dom';
import api from '../utils/axios_interceptor.ts';
import { useState } from 'react';

const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.25rem;
  gap: 0.5625rem;
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  flex-grow: 1;
`;

const CheckMyself = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  color: #1e1e1e;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface MatchingUserProps {
  creatorUid: string;
  workspaceId: number;
  isOwn: boolean;
}

const MatchingUser = ({
  creatorUid,
  workspaceId,
  isOwn,
}: MatchingUserProps) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const getChatroomId = async () => {
    try {
      const response = await api.post(`/participant/${workspaceId}`);
      console.log('채팅방 아이디 받아오기', response.data.response.chatRoomId);
      const chatRoomId = response.data.response.chatRoomId;
      navigate(`/chatroom/${chatRoomId}`);
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  return (
    <UserBox>
      <AccountCircleIcon fontSize='large' />
      <SubText>{creatorUid}</SubText>
      {isOwn ? (
        <CheckMyself>X</CheckMyself>
      ) : (
        <MatchingButton onClick={getChatroomId} />
      )}
    </UserBox>
  );
};

export default MatchingUser;
