import styled from '@emotion/styled';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid black;
  cursor: pointer;
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const MatchingListButton = ({ type, text }) => {
  return (
    <ButtonBox>
      {type === 'list' ? (
        <FormatListBulletedIcon fontSize='large' />
      ) : (
        <ChatBubbleOutlineIcon fontSize='large' />
      )}
      <SubText>{text}</SubText>
    </ButtonBox>
  );
};

export default MatchingListButton;
