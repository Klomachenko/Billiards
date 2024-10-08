import styled from '@emotion/styled';

const AuthInput = styled.input`
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 0.3125rem;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  /* height: 2.25rem; */
`;

interface TextInputProps {
  placeholder: string;
}

const TextInput = ({ placeholder }: TextInputProps) => {
  return <AuthInput placeholder={placeholder} />;
};

export default TextInput;
