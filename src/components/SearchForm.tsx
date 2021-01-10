import styled from "@emotion/styled";
import React from "react";
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
      <input type="submit" value="Submit" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export { SearchForm };
