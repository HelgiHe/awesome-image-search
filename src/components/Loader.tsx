import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import React from "react";

const Loader = () => {
  return (
    <Container>
      <First />
      <Second />
      <Third />
    </Container>
  );
};

const pulse = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }`;

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
  div {
    position: absolute;
    width: 16px;
    height: 50px;
    background: ${({ theme }) => theme.color.accent};
  }
`;

const First = styled.div`
  left: 8px;
  animation: ${pulse} 1.2s cubic-bezier(0.44, 0.01, 0.58, 0.99) infinite;
  animation-delay: 0.24s;
`;

const Second = styled.div`
  left: 32px;
  animation: ${pulse} 1.2s cubic-bezier(0.44, 0.01, 0.58, 0.99) infinite;
  animation-delay: 0.12s;
`;

const Third = styled.div`
  left: 56px;
  animation: ${pulse} 1.2s cubic-bezier(0.44, 0.01, 0.58, 0.99) infinite;
  animation-delay: 0;
`;

export { Loader };
