import styled from "@emotion/styled";
import React from "react";
import { Theme, useTheme } from "@emotion/react";
import { Search } from "react-feather";
import { Button } from "./Button";
import { Input } from "./Input";

const SearchForm = ({ onSubmit, searcTerm, setSearchTerm }) => {
  const theme: Theme = useTheme();

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        inputId="search"
        label="Myndaleit"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searcTerm}
        placeholder="Leitarorð..."
      />
      <StyledSubmitButton type="submit">
        <Search color={theme.color.text} />
      </StyledSubmitButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  margin: ${({ theme }) => `${theme.spacing.double} 0`};
`;

const StyledSubmitButton = styled(Button)`
  position: relative;
  right: 40px;
  border-radius: 0 4px 4px 0;
  height: 33px;
  align-self: flex-end;
`;

export { SearchForm };
