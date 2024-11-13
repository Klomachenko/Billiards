import axios from 'axios';
import styled from '@emotion/styled';
import TextInput from '../components/TextInput.tsx';
import DefaultButton from '../components/DefaultButton.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
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
  const navigate = useNavigate();
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/users/login', {
        uid,
        password,
      });

      if (response.data.success) {
        console.log('로그인 성공', response.data.response.id);
        localStorage.setItem('userNumber', response.data.response.id);
        navigate('/matching');
      } else {
        setError(response.data.error?.message || '로그인 실패');
      }
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  return (
    <Container>
      <MainText>로그인</MainText>
      <Box>
        <InputBox>
          <SubText>Id</SubText>
          <TextInput
            placeholder='아이디를 입력하세요'
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
        </InputBox>

        <InputBox>
          <SubText>Password</SubText>
          <TextInput
            placeholder='비밀번호를 입력하세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </InputBox>

        <ButtonBox>
          <DefaultButton text='Sign In' onClick={handleLogin} />
        </ButtonBox>
      </Box>
    </Container>
  );
};

export default LoginPage;
