import styled from '@emotion/styled';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FooterTabButton from '../components/FooterTabButton';
import api from '../utils/axios_interceptor';
import { useEffect, useState } from 'react';
import GameUsers from '../components/GameUsers';
import myPageIcon from '@mui/icons-material/PersonOutlineOutlined';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

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
  background-color: #f6f6f6;
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

const GameListPage = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');

  const getGameList = async () => {
    try {
      const response = await api.get('/games');
      console.log('게임목록 불러오기 성공', response.data.response);
      setGames(response.data.response);
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  useEffect(() => {
    getGameList();
  }, []);

  return (
    <Container>
      {/* <GameUsers /> */}
      <TextBox>
        <MainText>게임 목록</MainText>
      </TextBox>
      <Box>
        {games?.map((game) => (
          <GameUsers
            key={game.gameId}
            myNickname={game.myNickname}
            opponentNickname={game.opponentNickname}
            winnerNickname={game.winnerNickname}
          />
        ))}
      </Box>
      <ButtonBox>
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
        <FooterTabButton text='게임' Icon={SportsKabaddiIcon} url='game' />
        <FooterTabButton text='my' Icon={myPageIcon} url='game' />
      </ButtonBox>
    </Container>
  );
};

export default GameListPage;
