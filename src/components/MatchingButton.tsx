import styled from '@emotion/styled';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

const CircleButton = styled.button`
  height: 2.25rem;
  /* padding: 0.45rem; */
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const MatchingButton = ({ onClick }) => {
  return (
    <CircleButton onClick={onClick}>
      {/* <SubText>매칭</SubText> */}
      <TextsmsOutlinedIcon fontSize='medium' />
    </CircleButton>
  );
};

export default MatchingButton;
