import styled from '@emotion/styled';
import MatchingUser from '../components/MatchingUser.tsx';
import FooterTabButton from '../components/FooterTabButton.tsx';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import JoinQueueButton from '../components/JoinQueueButton.tsx';

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

const JoinButtonBox = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;
`;

const MatchingListPage = () => {
  return (
    <Container>
      <TextBox>
        <MainText>매칭 대기 목록</MainText>
      </TextBox>
      <Box>
        {/* <UserBox> */}
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        {/* </UserBox> */}
      </Box>
      <ButtonBox>
        <JoinButtonBox>
          <JoinQueueButton />
        </JoinButtonBox>

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

export default MatchingListPage;
