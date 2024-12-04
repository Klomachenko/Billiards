import styled from '@emotion/styled';

const MessageBox = styled.div`
  max-width: 13.75rem;
  min-height: 2.75rem;
  background-color: #f5f5f5;
  border-radius: 0.9375rem;
  padding: 0.5rem 0.7rem;
  display: flex;
  align-items: center;
  word-break: break-all;
  overflow-wrap: break-word;
  line-height: 1.5;
`;

const Message = () => {
  return (
    <MessageBox>
      안녕하세요. 반갑습니다. 본인의 대대 점수는 12점입니다. 혹시 점수가 어떻게
      되시나요?
    </MessageBox>
  );
};

export default Message;
