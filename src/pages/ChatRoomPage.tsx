import React from 'react';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/SendOutlined';
import OutIcon from '@mui/icons-material/West';

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
  return (
    <Container>
      <TextBox>
        <OutIcon fontSize='medium' />
        <MainText>Name</MainText>
      </TextBox>
      <Box></Box>
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
