import styled from '@emotion/styled';

interface MessageBoxProps {
  isMine: boolean;
}

const MessageBox = styled.div<MessageBoxProps>`
  max-width: 13.75rem;
  min-height: 2.75rem;
  background-color: ${(props) => (props.isMine ? '#daf5dc' : '#f5f5f5')};
  border-radius: 0.9375rem;
  padding: 0.1rem 0.55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
`;

const memberPK = localStorage.getItem('userNumber');

const Message = ({ sender, content }: { sender: string; content: string }) => {
  const isMine = sender === memberPK;
  return (
    <MessageBox isMine={isMine}>
      {!isMine && <p>{sender}</p>}
      <p>{content}</p>
    </MessageBox>
  );
};

export default Message;
