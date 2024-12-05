import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/SendOutlined';
import OutIcon from '@mui/icons-material/West';
import { useNavigate, useParams } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import { Stomp } from '@stomp/stompjs';
import Message from '../components/Message.tsx';
import api from '../utils/axios_interceptor.ts';

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
  const [error, setError] = useState('');
  const memberPK = localStorage.getItem('userNumber');

  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);

  const getMessageList = async () => {
    try {
      const response = await api.get(`chattings/${chatRoomId}`);
      console.log('메세지 리스트 불러오기 성공', response.data);

      const sortedMessages = response.data.response.sort(
        (a, b) => a.chattingId - b.chattingId
      );

      setMessages(sortedMessages);
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  useEffect(() => {
    getMessageList();

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
          const receivedMessage = JSON.parse(message.body);
          console.log('상대방 메시지 수신:', receivedMessage);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: receivedMessage.sender,
              message: receivedMessage.message,
              chatRoomId,
              isOwn: false, // 상대방의 메시지임을 표시
            },

            getMessageList(),
          ]);
        });
      };
    };

    connectStomp();

    setStompClient(stomp);

    return () => {
      stomp.deactivate(); // 정리 함수는 동기적으로 처리
    };
  }, [chatRoomId]);

  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendChat = () => {
    const newMessage = {
      message: chat,
      sender: memberPK,
      chatRoomId,
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

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: memberPK, message: chat, chatRoomId, isOwn: true },
    ]);

    console.log('메세지 전송 클릭 후', messages);

    setChat('');

    getMessageList();
  };

  const navigate = useNavigate();

  return (
    <Container>
      <TextBox>
        <OutIcon
          fontSize='medium'
          onClick={() => {
            navigate('/chat');
          }}
        />
        <MainText>Name</MainText>
      </TextBox>
      <Box>
        {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender}
            content={msg.content}
            isOwn={msg.isOwn}
          />
        ))}
        <div ref={messageEndRef}></div>
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
