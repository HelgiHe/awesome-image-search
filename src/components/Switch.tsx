import React from "react";
import styled from "@emotion/styled";
import { Theme, useTheme } from "@emotion/react";
type SwichProps = { isOn: boolean; handleToggle: () => void };

const Switch = ({ isOn, handleToggle }: SwichProps) => {
  const theme: Theme = useTheme();
  return (
    <React.Fragment>
      <CheckBox
        id="switch"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      />
      <StyledLabel
        className="switch-label"
        htmlFor="switch"
        isOn={isOn}
        activeBackground={theme.color.secondary}
        idleBackground={theme.color.primary}
      >
        <SwitchButton />
      </StyledLabel>
    </React.Fragment>
  );
};

export { Switch };

const CheckBox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked {
    & + label span {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: ${({
    isOn,
    activeBackground,
    idleBackground,
  }: {
    isOn: boolean;
    activeBackground: string;
    idleBackground;
  }) => (isOn ? activeBackground : idleBackground)};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  &:active span {
    width: 60px;
  }
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

const SwitchWrapper = styled.div`
  margin: 5px;
`;
