import React from "react";

//library
import styled from "styled-components";

// components
import SearchInput from "../../components/SearchInput";
import Selector from "../../components/Selector";
import Card from "./Card/Card";

//utils
import { media } from "../../style/media";

function UserList({ userList, type, handleSearch, handleSelectType }) {
  return (
    <>
      <Header>
        <h1>Users</h1>
        <div className="filterWrapper">
          <SearchInput
            id="search_input"
            type="text"
            placeholder={`Search By ${type}`}
            handleChange={handleSearch}
          />
          <Selector
            id="search_type"
            value={type}
            list={["Name", "Username", "Email"]}
            handleSelectType={handleSelectType}
          />
        </div>
      </Header>
      <ListWrapper>
        {userList.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ListWrapper>
    </>
  );
}

const Header = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0px;
  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  h1 {
    color: ${(props) => props.theme.darkGray};
    font-size: 1.9rem;
  }
  .filterWrapper {
    display: flex;
    flex-direction: column;
    ${media.tablet} {
      flex-direction: row;
      justify-content: flex-start;
    }
  }
`;

const ListWrapper = styled.section`
  width: 100%;
  > a:nth-child(odd) {
    background-color: ${(props) => props.theme.lightGray};
  }
`;

export default UserList;
