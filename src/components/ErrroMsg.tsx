import styled from "@emotion/styled";
import { Theme, useTheme } from "@emotion/react";
import { AlertCircle } from "react-feather";
import React from "react";

const ErrorMsg = ({ message }) => {
  const theme: Theme = useTheme();
  return (
    <ErrorContainer>
      <AlertCircle color={theme.color.error} size={36} />
      <Message>{message}</Message>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.double};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
`;

const Message = styled.p`
  margin-left: ${({ theme }) => theme.spacing.single};
`;

export { ErrorMsg };
