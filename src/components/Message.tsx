import styled from '@emotion/styled';

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

const Message = ({
  content,
  isOwn,
}: {
  sender: string;
  content: string;
  isOwn: boolean;
}) => {
  return (
    <MessageContainer isOwn={isOwn}>
      <MessageBox isOwn={isOwn}>
        <p>{content}</p>
      </MessageBox>
    </MessageContainer>
  );
};

export default Message;
