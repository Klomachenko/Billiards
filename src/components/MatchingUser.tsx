import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MatchingButton from './MatchingButton.tsx';
import { useNavigate } from 'react-router-dom';

const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.25rem;
  /* border: 1px solid black; */
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  flex-grow: 1;
`;

interface MatchingUserProps {
  creatorUid: string;
  roomNumber: number;
}

const MatchingUser = ({ creatorUid, roomNumber }: MatchingUserProps) => {
  const navigate = useNavigate();

  const createChatroom = () => {
    console.log('채팅방 넘버', roomNumber);
    navigate(`/chatroom/${roomNumber}`);
  };

  return (
    <UserBox>
      <AccountCircleIcon fontSize='large' />
      <SubText>{creatorUid}</SubText>
      <MatchingButton onClick={createChatroom} />
    </UserBox>
  );
};

export default MatchingUser;
