import styled from '@emotion/styled';
import UnmatchedUser from '@mui/icons-material/PersonOutlineOutlined';
import MatchedUser from '@mui/icons-material/Person';
import api from '../utils/axios_interceptor';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  width: 13.5rem;
  height: 13.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  width: 90%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 0.0313rem solid #757575;
`;

const IconBox = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 2.125rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  gap: 0.25rem;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 1.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MatchingSelectButton = styled.button`
  width: 4.5rem;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #2c2c2c;
  color: #f3f3f3;
  font-size: 0.75rem;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #f3f3f3;
    color: #2c2c2c;
  }
`;

const TextBox = styled.div`
  display: flex;
  width: 100%;
  height: 2.875rem;
  align-items: center;
  justify-content: center;
  color: #757575;
  font-size: 0.625rem;
`;

const MatchingStatusModal = ({
  myMatchStatus,
  counterPartMatchStatus,
  chatRoomId,
}) => {
  const [error, setError] = useState('');
  console.log(localStorage.getItem('userNumber'));
  const [myStatus, setMystatus] = useState(myMatchStatus);
  const [counterPartStatus, setCounterPartStatus] = useState(
    counterPartMatchStatus
  );

  const getMatchingStatus = async () => {
    try {
      const response = await api.get(`participant/${chatRoomId}/matchStatus`);
      console.log('매칭 현황 조회 불러오기 성공', response.data);
      setMystatus(response.data.response.myself);
      setCounterPartStatus(response.data.response.counterpart);
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  const applyMatch = async () => {
    try {
      const response = await api.post(
        `participant/matching/${chatRoomId}`,
        {
          isMatch: !myStatus,
        },
        {
          headers: {
            Authorization: localStorage.getItem('userNumber'),
          },
        }
      );
      console.log('매칭 신청 버튼 클릭', response.data);
      getMatchingStatus();
    } catch (err) {
      setError('서버 오류 발생, 재시도 바람');
      console.error(err);
    }
  };

  return (
    <Container>
      <TitleBox>매칭 현황</TitleBox>
      <IconBox>
        <UserBox>
          {myStatus ? (
            <MatchedUser fontSize='large' />
          ) : (
            <UnmatchedUser fontSize='large' />
          )}
          나
        </UserBox>
        <UserBox>
          {counterPartStatus ? (
            <MatchedUser fontSize='large' />
          ) : (
            <UnmatchedUser fontSize='large' />
          )}
          상대방
        </UserBox>
      </IconBox>
      <ButtonBox>
        <MatchingSelectButton onClick={applyMatch}>
          {myStatus ? '취소' : '매칭 신청'}
        </MatchingSelectButton>
      </ButtonBox>
      <TextBox>매칭이 확정되면 취소가 불가능합니다</TextBox>
    </Container>
  );
};

export default MatchingStatusModal;
