import styled from "@emotion/styled";
import React from "react";
import { Search } from "react-feather";
import { Button } from "./Button";
import { Input } from "./Input";

const SearchForm = ({ onSubmit, searcTerm, setSearchTerm }) => {
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
        <Search />
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
