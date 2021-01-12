import styled from "@emotion/styled";
import React from "react";
import { Theme, useTheme } from "@emotion/react";
import { Search } from "react-feather";
import { Button } from "./Button";
import { Input } from "./Input";

type InputProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  resetSearch: () => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({
  onSubmit,
  resetSearch,
  searchTerm,
  setSearchTerm,
}: InputProps) => {
  const theme: Theme = useTheme();

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        inputId="search"
        label="Myndaleit"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
        placeholder=""
        onFocus={resetSearch}
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
  right: 36px;
  border-radius: 0 4px 4px 0;
  height: 34px;
  align-self: flex-end;
  z-index: -1;
`;

export { SearchForm };
