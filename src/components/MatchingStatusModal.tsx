import styled from '@emotion/styled';
import UnmatchedUser from '@mui/icons-material/PersonOutlineOutlined';
import MatchedUser from '@mui/icons-material/Person';

const Container = styled.div`
  display: flex;
  width: 13.5rem;
  height: 13.5rem;
  border-radius: 1rem;
  border: 1px solid black;
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

const MatchingStatusModal = () => {
  return (
    <Container>
      <TitleBox>매칭 현황</TitleBox>
      <IconBox>
        <UserBox>
          <UnmatchedUser fontSize='large' />나
        </UserBox>
        <UserBox>
          <MatchedUser fontSize='large' />
          상대방
        </UserBox>
      </IconBox>
      <ButtonBox>
        <MatchingSelectButton>매칭 신청</MatchingSelectButton>
      </ButtonBox>
      <TextBox>매칭이 확정되면 취소가 불가능합니다</TextBox>
    </Container>
  );
};

export default MatchingStatusModal;
