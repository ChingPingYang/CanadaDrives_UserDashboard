import React from "react";

//library
import styled from "styled-components";

//utils
import { media } from "../style/media";

function SearchInput({ id, type, placeholder, handleChange }) {
  return (
    <InputWrapper>
      <label htmlFor={id}>Search</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="search-form"
        onChange={handleChange}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  ${media.tablet} {
    width: 200px;
    margin: 0px;
    margin-right: 20px;
  }
  label {
    color: ${(props) => props.theme.midGray};
    font-size: 1.1rem;
    margin-bottom: 3px;
  }
  input {
    all: unset;
    border: ${(props) => `solid 1px ${props.theme.midGray}`};
    padding: 5px 0px 5px 5px;
    height: 1.5rem;

    ::placeholder {
      color: ${(props) => props.theme.lightGray};
    }
  }
`;

export default SearchInput;
