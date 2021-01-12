import styled from "@emotion/styled";
import React from "react";

type InputProps = {
  inputId: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  placeholder: string;
  value: string;
};

const Input = ({
  inputId,
  label,
  onChange,
  onFocus,
  placeholder,
  value,
}: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={inputId}>{label}</label>
      <StyledInput
        id={inputId}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
      />
    </InputContainer>
  );
};

const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  width: 400px;
`;

const StyledInput = styled.input`
  background: none;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  padding: 1em;
  font: inherit;
  font-size: inherit;
  border-radius: 4px;
  height: 1em;
  width: 100%;
`;

export { Input };
