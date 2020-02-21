import React from "react";
import StyledSearchBar, { StyledInput } from "./styledComponents/StyledSearch";
const SearchBar = props => {
  return (
    <StyledSearchBar>
      <StyledInput
        type="text"
        placeholder="Search by Character"
        onChange={props.function}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
