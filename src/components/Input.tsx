import styled from "@emotion/styled";
import React from "react";

type InputProps = {
  inputId: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

const Input = ({
  inputId,
  label,
  onChange,
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
      />
    </InputContainer>
  );
};

const InputContainer = styled.span`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  background: none;
  border: 1px solid #ddd;
  padding: 1em;
  font: inherit;
  font-size: inherit;
  border-radius: 4px;
  height: 1em;
  width: 500px;
`;

export { Input };
