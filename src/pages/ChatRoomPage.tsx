import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/SendOutlined';
import OutIcon from '@mui/icons-material/West';
import { useParams } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
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
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);
  const memberPK = localStorage.getItem('userNumber');

  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);

  useEffect(() => {
    const stomp = new Client({
      brokerURL: 'wss://hyunsolution.duckdns.org/chat',
      debug: (str: string) => {
        console.log(`STOMP DEBUG: ${str}`);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log('STOMP 연결 성공');
      },
      onStompError: (frame) => {
        console.error('STOMP 에러 발생:', frame);
      },
    });

    // 비동기 함수 호출
    const connectStomp = async () => {
      await stomp.activate(); // 비동기 함수로 처리
      stomp.onConnect = () => {
        console.log('STOMP 연결 성공');
        stomp.subscribe(`/topic/chat/${chatRoomId}`, (message) => {
          console.log('메시지 수신:', message.body);
        });
      };
    };

    connectStomp(); // 비동기 함수 호출

    setStompClient(stomp);

    return () => {
      stomp.deactivate(); // 정리 함수는 동기적으로 처리
    };
  }, [chatRoomId]);

  const sendChat = () => {
    const newMessage = {
      message: chat,
    };

    if (stompClient) {
      stompClient.publish({
        destination: `/app/chat/${chatRoomId}`,
        body: JSON.stringify(newMessage),
        headers: {
          Authorization: memberPK,
        },
      });
    }

    setMessages((prev) => {
      const updatedMessages = [
        ...prev,
        { sender: memberPK, message: chat, chatRoomId },
      ];
      console.log('메시지 발신 성공:', updatedMessages);
      return updatedMessages;
    });

    setChat('');
  };

  return (
    <Container>
      <TextBox>
        <OutIcon fontSize='medium' />
        <MainText>Name</MainText>
      </TextBox>
      <Box>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} content={msg.message} />
        ))}
      </Box>
      <ChattingInputBox>
        <ChattingInput
          placeholder='채팅을 입력해주세요'
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <SendButtonBox onClick={sendChat}>
          <SendIcon fontSize='medium' />
        </SendButtonBox>
      </ChattingInputBox>
    </Container>
  );
};
export default ChatRoomPage;
