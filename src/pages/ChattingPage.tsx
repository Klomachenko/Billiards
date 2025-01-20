import styled from '@emotion/styled';
import FooterTabButton from '../components/FooterTabButton.tsx';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChattingUser from '../components/ChattingUser.tsx';
import api from '../utils/axios_interceptor.ts';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-height: 932px;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
`;

const TextBox = styled.div`
  display: flex;
  width: 80%;
  align-items: flex-start;
`;

const MainText = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 1.5rem;
`;

const Box = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
  height: 70%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  /* border: 1px solid black; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #8dcf99;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const ChattingPage = () => {
  const navigate = useNavigate();
  const [chattingRooms, setChattingRooms] = useState([]);
  const [error, setError] = useState('');

  const getChattingRoomList = async () => {
    try {
      const response = await api.get('/chattings');
      console.log('채팅방 목록 불러오기 성공', response.data.response);
      setChattingRooms(response.data.response);
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  const enterChat = (chatRoomId: string) => {
    navigate(`/chatroom/${chatRoomId}`);
  };

  useEffect(() => {
    getChattingRoomList();
  }, []);

  return (
    <Container>
      <TextBox>
        <MainText>채팅 목록</MainText>
      </TextBox>
      <Box>
        {chattingRooms?.map((chatRoom) => (
          <ChattingUser
            key={chatRoom.chatRoomId}
            lastMessage={chatRoom.lastMessage}
            otherPerson={chatRoom.otherPeople[0]}
            unReadCount={chatRoom.unReadCount}
            onClick={() => {
              enterChat(chatRoom.chatRoomId);
            }}
          />
        ))}
      </Box>
      <ButtonBox>
        <FooterTabButton
          text='매칭 대기 목록'
          Icon={FormatListBulletedIcon}
          url='matching'
        />
        <FooterTabButton
          text='채팅창'
          Icon={ChatBubbleOutlineIcon}
          url='chat'
        />
      </ButtonBox>
    </Container>
  );
};

export default ChattingPage;
