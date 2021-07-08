import React, { useState, useEffect } from "react";

//utils
import { getData } from "../../util/dataFetcher";

//components
import UserDetails from "./UserDetails";

function UserDetailsContainer({ match: { params }, history }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  // fetch user detail and posts when component first mounts
  useEffect(() => {
    (async () => {
      setError(false);
      try {
        const detailEndpoint = `http://jsonplaceholder.typicode.com/users/${params.id}`;
        const postEndpoint = `http://jsonplaceholder.typicode.com/posts?userId=${params.id}`;
        const responseArray = await Promise.all([
          getData(detailEndpoint),
          getData(postEndpoint),
        ]);
        setUserDetail(responseArray[0].data);
        setUserPosts(responseArray[1].data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleGoToHomePage = () => {
    history.push("/");
  };

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Please provide a valid userId</h1>;

  return (
    <UserDetails
      userDetail={userDetail}
      userPosts={userPosts}
      handleGoToHomePage={handleGoToHomePage}
    />
  );
}

export default UserDetailsContainer;
