import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.25rem;
  gap: 0.5rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const ChattingUser = () => {
  return (
    <UserBox>
      <AccountCircleIcon fontSize='large' />
      <TextBox>
        <SubText>사용자 ID</SubText>
        <SubText>recent chat message</SubText>
      </TextBox>
    </UserBox>
  );
};

export default ChattingUser;
