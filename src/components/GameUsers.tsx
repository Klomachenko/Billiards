import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const GameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 8rem;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5);
  background-color: #fefefe;
`;

const DateBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 1.25rem;
  color: #5a5a5a;
  font-size: 0.625rem;
  padding-left: 0.875rem;
  box-sizing: border-box;
`;

const UserBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 4.3125rem;
  color: #5a5a5a;
  font-size: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

const UserText = styled.p`
  font-size: 0.75rem;
  margin: 0;
  color: #303030;
`;

const User = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  gap: 0.25rem;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 2.4375rem;
  color: #5a5a5a;
  font-size: 0.625rem;
`;

const GameStartButton = styled.button`
  display: flex;
  width: 15.5rem;
  height: 1.5469rem;
  background-color: #bbefc5;
  color: #303030;
  font-size: 0.625rem;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  border: none;
`;

const GameUsers = ({ myNickname, opponentNickname, winnerNickname }) => {
  return (
    <GameBox>
      <DateBox>2025-01-23</DateBox>
      <UserBox>
        <User>
          <AccountCircleIcon fontSize='large' />
          {myNickname}
        </User>
        <UserText>vs</UserText>
        <User>
          <AccountCircleIcon fontSize='large' />
          {opponentNickname}
        </User>
      </UserBox>
      <ButtonBox>
        <GameStartButton>게임 시작하기</GameStartButton>
      </ButtonBox>
    </GameBox>
  );
};

export default GameUsers;
