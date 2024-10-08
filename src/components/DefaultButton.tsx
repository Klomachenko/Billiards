import styled from '@emotion/styled';

const MainButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: black;
  cursor: pointer;
  color: white;
  border-radius: 0.3125rem;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

interface ButtonProps {
  text: string;
}

const DefaultButton = ({ text }: ButtonProps) => {
  return <MainButton>{text}</MainButton>;
};

export default DefaultButton;
