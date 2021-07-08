import React from "react";
//library
import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export default Wrapper;
