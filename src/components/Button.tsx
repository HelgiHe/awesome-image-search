import styled from "@emotion/styled";
import React from "react";

type ButtonProps = {
  className?: string;
  type: "submit" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: JSX.Element;
};

const Button = ({ className, type, onClick, children }: ButtonProps) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
`;

export { Button };
