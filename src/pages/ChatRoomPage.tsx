import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/SendOutlined';
import OutIcon from '@mui/icons-material/West';
import { useParams } from 'react-router-dom';
import { Client, IFrame, IMessage } from '@stomp/stompjs';
import { Stomp } from '@stomp/stompjs';
import Message from '../components/Message';

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
  width: 90%;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const MainText = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
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
  border: 1px solid black;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChattingInputBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 4.5rem;
  background-color: #f3f9f4;
  position: absolute;
  bottom: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;

const ChattingInput = styled.input`
  width: 80%;
  height: 2.75rem;
  background-color: #e0ece2;
  border-radius: 1.5rem;
  border: none;
  padding-left: 0.5rem;
  font-size: 1rem;
`;

const SendButtonBox = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatRoomPage = () => {
  const { chatRoomId } = useParams();
  console.log('현재 chatRoomId:', chatRoomId);
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);

  useEffect(() => {
    const stomp = new Client({
      brokerURL: 'ws://15.164.186.158:8080/chat',
      debug: (str: string) => {
        console.log(`STOMP DEBUG: ${str}`);
      },
      reconnectDelay: 5000, //자동 재 연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log('STOMP 연결 성공');
      },
      onStompError: (frame) => {
        console.error('STOMP 에러 발생:', frame);
      },
    });
    setStompClient(stomp);

    stomp.onConnect = () => {
      console.log('STOMP 연결 성공');
      stomp.subscribe(`/topic/${chatRoomId}`, (message) => {
        console.log('메시지 수신:', message.body);
      });
      stomp.publish({
        destination: `/app/${chatRoomId}`,
        body: JSON.stringify({
          chatRoomId: chatRoomId,
          message: '테스트 메시지',
        }),
      });
    };

    stomp.activate();
  }, []);

  return (
    <Container>
      <TextBox>
        <OutIcon fontSize='medium' />
        <MainText>Name</MainText>
      </TextBox>
      <Box>
        <Message />
      </Box>
      <ChattingInputBox>
        <ChattingInput />
        <SendButtonBox>
          <SendIcon fontSize='medium' />
        </SendButtonBox>
      </ChattingInputBox>
    </Container>
  );
};
export default ChatRoomPage;
