import React from "react";

//library
import styled from "styled-components";

//utils
import { media } from "../style/media";

const Selector = ({ id, value, list, handleSelectType }) => {
  return (
    <SelectWrapper>
      <label htmlFor={id}>Sort By</label>
      <select
        id={id}
        className="select-input"
        value={value}
        onChange={handleSelectType}
      >
        {list.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  ${media.tablet} {
    margin: 0px;
    width: 200px;
  }
  label {
    color: ${(props) => props.theme.midGray};
    font-size: 1.1rem;
    margin-bottom: 3px;
  }
  select {
    all: unset;
    border: ${(props) => `solid 1px ${props.theme.midGray}`};
    padding: 5px 0px 5px 5px;
    height: 1.5rem;
    align-items: center;
    ::placeholder {
      color: ${(props) => props.theme.lightGray};
    }
  }
`;

export default Selector;
