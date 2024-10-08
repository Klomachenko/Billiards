import styled from '@emotion/styled';

const CircleButton = styled.button`
  height: 2.25rem;
  padding: 0.45rem;
  border-radius: 50%;
  border: 1px solid black;
`;

const SubText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
`;

const MatchingButton = () => {
  return (
    <CircleButton>
      <SubText>매칭</SubText>
    </CircleButton>
  );
};

export default MatchingButton;
