import styled from '@emotion/styled';
import React from 'react';

const AuthInput = styled.input`
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 0.3125rem;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
`;

interface TextInputProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ placeholder, type, value, onChange }: TextInputProps) => {
  return (
    <AuthInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
