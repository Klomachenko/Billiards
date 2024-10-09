import styled from '@emotion/styled';
import MatchingUser from '../components/MatchingUser.tsx';
import FooterTabButton from '../components/FooterTabButton.tsx';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 30rem;
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
  width: 80%;
  height: 70%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: rgb(243, 237, 247, 100);
  position: absolute;
  bottom: 0;
  display: flex;
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
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        <MatchingUser />
        {/* </UserBox> */}
      </Box>
      <ButtonBox>
        <FooterTabButton text={'매칭 대기 목록'} type={'list'} />
        <FooterTabButton text={'채팅창'} type={'chat'} />
      </ButtonBox>
    </Container>
  );
};

export default MatchingListPage;
