import React from "react";

//library
import { Link } from "react-router-dom";
import styled from "styled-components";

//utils
import { media } from "../../../style/media";

function Card({ user }) {
  return (
    <CardWrapper to={`/user_details/${user.id}`}>
      <div className="leftContainer">
        <div className="avatar" />
      </div>
      <div className="rightContainer">
        <div className="userNameContainer">
          <h4>{user.name}</h4>
          <h4>{user.username}</h4>
        </div>
        <div className="emailContainer">
          <h4 className="email">{user.email}</h4>
        </div>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 25px;
  width: 100%;
  border: solid 1px ${(props) => props.theme.lightGray};
  .leftContainer {
    margin-right: 15px;
    .avatar {
      background-color: ${(props) => props.theme.midGray};
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
  }
  .rightContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;

    h4 {
      font-weight: 300;
      margin: 2px 0px;
    }
    ${media.tablet} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .userNameContainer {
      /* border: solid 1px red; */
    }
    .emailContainer {
      /* border: solid 1px red; */

      color: ${(props) => props.theme.mainBlue};
    }
  }
`;

export default Card;
