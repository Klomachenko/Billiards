import styled from '@emotion/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MatchingButton from './MatchingButton.tsx';

const UserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.25rem;
  /* border: 1px solid black; */
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  flex-grow: 1;
`;

const MatchingUser = () => {
  return (
    <UserBox>
      <AccountCircleIcon fontSize='large' />
      <SubText>사용자 ID</SubText>
      <MatchingButton />
    </UserBox>
  );
};

export default MatchingUser;
