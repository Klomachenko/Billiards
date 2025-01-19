import styled from '@emotion/styled';
import { useState } from 'react';

const MessageContainer = styled.div<{ isOwn: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ isOwn }) => (isOwn ? 'flex-end' : 'flex-start')};
`;

const MessageBox = styled.div<{ isOwn: boolean }>`
  max-width: 13.75rem;
  min-height: 2rem;
  background-color: ${({ isOwn }) => (isOwn ? '#daf5dc' : '#f5f5f5')};
  border-radius: 0.9375rem;
  padding: 0.1rem 0.55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
`;

const SystemMessageBox = styled.div`
  width: 100%;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartgameMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.75rem;
  background-color: #f3f9f4;
  color: #14ae5c;
  font-size: 0.875rem;
  border-radius: 0.875rem;
`;

const Message = ({
  content,
  isOwn,
  messageType,
}: {
  sender: string;
  content: string;
  isOwn: boolean;
  messageType: string;
}) => {
  if (!content || !messageType) {
    return null; // 빈 메시지나 타입이 없으면 렌더링 생략
  }

  return (
    <MessageContainer isOwn={isOwn}>
      {messageType === 'TEXT' ? (
        <MessageBox isOwn={isOwn}>
          <p>{content}</p>
        </MessageBox>
      ) : messageType === 'SYSTEM' ? (
        <SystemMessageBox>{content}</SystemMessageBox>
      ) : (
        <StartgameMessageBox>
          <p>매칭되었습니다.</p>
          <p>대전에서 게임을 시작하세요!</p>
        </StartgameMessageBox>
      )}
    </MessageContainer>
  );
};

export default Message;
