import React from "react";
const UserList = React.lazy(() =>
  import("../pages/UserList/UserListContainer")
);
const UserDetails = React.lazy(() =>
  import("../pages/UserDetails/UserDetailsContainer")
);

export const routeMap = [
  {
    component: UserList,
    path: "/",
    exact: true,
  },
  {
    component: UserDetails,
    path: "/user_details/:id",
  },
];
