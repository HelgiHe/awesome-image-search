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
    <React.Fragment>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export { Input };
