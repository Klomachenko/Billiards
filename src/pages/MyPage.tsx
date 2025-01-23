import styled from '@emotion/styled';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import myPageIcon from '@mui/icons-material/PersonOutlineOutlined';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import FooterTabButton from '../components/FooterTabButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-height: 932px;
  max-width: 480px;
  margin: 0 auto;
  background-color: #f6f6f6;
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

const ProfileCard = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #5a5a5a;
`;

const StatTitle = styled.span`
  font-weight: 500;
`;

const StatValue = styled.span`
  font-weight: 700;
  color: #303030;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: #8dcf99;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const MyPage = () => {
  const mockData = {
    name: '감성돔',
    wins: 10,
    losses: 5,
    average: 0.25,
    score: 15,
  };

  return (
    <Container>
      <TextBox>
        <MainText>Profile</MainText>
      </TextBox>
      <Box>
        <ProfileCard>
          <StatItem>
            <StatTitle>이름</StatTitle>
            <StatValue>{mockData.name}</StatValue>
          </StatItem>
          <StatItem>
            <StatTitle>승</StatTitle>
            <StatValue>{mockData.wins}</StatValue>
          </StatItem>
          <StatItem>
            <StatTitle>패</StatTitle>
            <StatValue>{mockData.losses}</StatValue>
          </StatItem>
          <StatItem>
            <StatTitle>당구 에버리지</StatTitle>
            <StatValue>{mockData.average}</StatValue>
          </StatItem>
          <StatItem>
            <StatTitle>적정 점수</StatTitle>
            <StatValue>{mockData.score}</StatValue>
          </StatItem>
        </ProfileCard>
      </Box>

      <ButtonBox>
        <FooterTabButton
          text='매칭 대기'
          Icon={FormatListBulletedIcon}
          url='matching'
        />
        <FooterTabButton
          text='채팅창'
          Icon={ChatBubbleOutlineIcon}
          url='chat'
        />
        <FooterTabButton text='게임' Icon={SportsKabaddiIcon} url='game' />
        <FooterTabButton text='my' Icon={myPageIcon} url='my' />
      </ButtonBox>
    </Container>
  );
};

export default MyPage;
