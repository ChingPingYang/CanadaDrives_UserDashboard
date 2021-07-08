import React from "react";

//library
import styled from "styled-components";

// components
import CardWrapper from "./Cards/CardWrapper";
import Contact from "./Cards/Card_types/Contact";
import Address from "./Cards/Card_types/Address";
import Company from "./Cards/Card_types/Company";
import Post from "./Cards/Card_types/Post";

//utils
import { media } from "../../style/media";

function UserDetails({ userDetail, userPosts, handleGoToHomePage }) {
  return (
    <>
      <Header>
        <h1 onClick={handleGoToHomePage} className="navTitle">
          Users
        </h1>
        <h1>{` > ${userDetail.name}`}</h1>
      </Header>
      <ContentSection>
        <CardWrapper title="Contact Info">
          <Contact
            data={{
              username: userDetail.username,
              email: userDetail.email,
              phone: userDetail.phone,
              website: userDetail.website,
            }}
          />
        </CardWrapper>
        <CardWrapper title="Address">
          <Address data={userDetail.address} />
        </CardWrapper>
        <CardWrapper title="Company">
          <Company data={userDetail.company} />
        </CardWrapper>
      </ContentSection>

      <Header>
        <h1>{`Posts by ${userDetail.name}`}</h1>
      </Header>
      <ContentSection>
        {userPosts.map((post) => (
          <CardWrapper key={post.id} title={post.title} isPost>
            <Post data={post.body} />
          </CardWrapper>
        ))}
      </ContentSection>
    </>
  );
}

const Header = styled.section`
  display: flex;
  width: 100%;
  ${media.tablet} {
    margin: 10px 0px;
  }
  h1 {
    color: ${(props) => props.theme.darkGray};
    font-size: 1.3rem;
    ${media.mobile_l} {
      font-size: 1.9rem;
    }
  }
  .navTitle {
    color: ${(props) => props.theme.mainBlue};
    cursor: pointer;
    margin-right: 0.8rem;
  }
`;

const ContentSection = styled.section`
  width: 100%;
  margin: 10px 0px 10px 0px;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: solid 1px ${(props) => props.theme.midGray};
  ${media.tablet} {
    margin: 10px 0px 40px 0px;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0.8rem;
    grid-column-gap: 0.8rem;
    border: none;
  }
`;

export default UserDetails;
