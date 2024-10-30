import styled from '@emotion/styled';

const JoinButton = styled.button`
  height: 3.25rem;
  width: 3.25rem;
  border-radius: 50%;
  border: 1px solid white;
  color: white;
  background-color: #8dcf99;
  cursor: pointer;
`;

const SubText = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
`;

const JoinQueueButton = () => {
  return (
    <JoinButton>
      <SubText>+</SubText>
    </JoinButton>
  );
};

export default JoinQueueButton;
