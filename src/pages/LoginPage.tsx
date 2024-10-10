import styled from '@emotion/styled';
import TextInput from '../components/TextInput.tsx';
import DefaultButton from '../components/DefaultButton.tsx';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Box = styled.div`
  margin-top: 2rem;
  width: 16rem;
  height: 14.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const InputBox = styled.div`
  width: 16rem;
  min-height: 4.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainText = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const ButtonBox = styled.div`
  width: 100%;
  margin-top: auto;
`;

const LoginPage = () => {
  return (
    <Container>
      <MainText>로그인</MainText>
      <Box>
        <InputBox>
          <SubText>Id</SubText>
          <TextInput placeholder={'아이디를 입력하세요'} />
        </InputBox>

        <InputBox>
          <SubText>Password</SubText>
          <TextInput placeholder={'비밀번호를 입력하세요'} />
        </InputBox>

        <ButtonBox>
          <DefaultButton text={'Sign In'} />
        </ButtonBox>
      </Box>
    </Container>
  );
};

export default LoginPage;
