import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/SendOutlined';
import OutIcon from '@mui/icons-material/West';
import { useNavigate, useParams } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import Message from '../components/Message.tsx';
import api from '../utils/axios_interceptor.ts';
import MatchingStatusModal from '../components/MatchingStatusModal.tsx';

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
  position: relative;
`;

const MainText = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`;

const MatchingCheckButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0313rem solid black;
  border-radius: 1.5rem;
  width: 4.125rem;
  height: 1.5rem;
  font-size: 0.75rem;
  background-color: #ffffff;
  color: #303030;
  position: absolute;
  right: 0;
`;

const Box = styled.div`
  box-sizing: border-box;
  width: 90%;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ChatRoomPage = () => {
  const { chatRoomId } = useParams();
  const navigate = useNavigate();
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const memberPK = localStorage.getItem('userNumber');
  const chatInputRef = useRef<HTMLInputElement | null>(null);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myMatchStatus, setMyMatchStatus] = useState(false);
  const [counterpartMatchStatus, setCounterpartMatchStatus] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getMessageList = async () => {
    try {
      const response = await api.get(`chattings/${chatRoomId}`);
      const sortedMessages = response.data.response.chattings.sort(
        (a, b) => a.chattingId - b.chattingId
      );
      setMessages(sortedMessages);
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  const getMatchingStatus = async () => {
    try {
      const response = await api.get(`participant/${chatRoomId}/matchStatus`);
      console.log('매칭 현황 조회 불러오기 성공', response.data);
      openModal();
      setMyMatchStatus(response.data.response.myself);
      setCounterpartMatchStatus(response.data.response.counterpart);
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

    const connectStomp = async () => {
      await stomp.activate();
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
              isOwn: false,
            },
            getMessageList(),
          ]);
        });
      };
    };

    connectStomp();
    setStompClient(stomp);

    return () => {
      stomp.deactivate();
    };
  }, [chatRoomId]);

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

    setChat('');
    if (chatInputRef.current) {
      chatInputRef.current.focus();
    }
    getMessageList();
  };

  return isModalOpen ? (
    <ModalOverlay onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <MatchingStatusModal
          myMatchStatus={myMatchStatus}
          counterPartMatchStatus={counterpartMatchStatus}
          chatRoomId={chatRoomId}
        />
      </div>
    </ModalOverlay>
  ) : (
    <Container>
      <TextBox>
        <OutIcon
          fontSize='medium'
          onClick={() => {
            navigate('/chat');
          }}
        />
        <MainText>Name</MainText>
        <MatchingCheckButton onClick={getMatchingStatus}>
          매칭 현황
        </MatchingCheckButton>
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
          ref={chatInputRef}
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
