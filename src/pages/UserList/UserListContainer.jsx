import React, { useEffect, useState } from "react";

//utils
import { getData } from "../../util/dataFetcher";

//components
import UserList from "./UserList";

function UserListContainer() {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [type, setType] = useState("Name");
  const [userList, setUserList] = useState([]);

  // fetch user list when component first mounts
  useEffect(() => {
    getData("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter user list before passing to child component
  const userListFilter = (userList, searchInput, type) => {
    const lowerCaseInput = searchInput.toLowerCase();
    const lowerCaseType = type.toLowerCase();
    if (searchInput === "") return userList;
    const filteredList = userList.filter((user) =>
      user[lowerCaseType].toLowerCase().includes(lowerCaseInput)
    );
    return filteredList;
  };

  //set search input as user typing
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectType = (e) => {
    setType(e.target.value);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <UserList
      userList={userListFilter(userList, searchInput, type)}
      type={type}
      handleSearch={handleSearch}
      handleSelectType={handleSelectType}
    />
  );
}

export default UserListContainer;
