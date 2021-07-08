import React from "react";

//library
import styled, { css } from "styled-components";

//utils
import { media } from "../../../style/media";

function Card({ title, isPost = false, children }) {
  return (
    <CardWrapper isPost={isPost}>
      <Header>{title}</Header>
      {children}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 0px;
  ${(props) =>
    props.isPost &&
    css`
      border-bottom: solid 1px ${(props) => props.theme.midGray};
    `}
  ${media.tablet} {
    padding: 15px;
    border: solid 1px ${(props) => props.theme.midGray};
  }
  p {
    font-size: 0.7rem;
    margin-bottom: 5px;
  }
`;

const Header = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

export default Card;
