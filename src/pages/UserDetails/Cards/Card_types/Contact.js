import React from "react";

//library
import styled from "styled-components";

function Contact({ data: { username, email, phone, website } }) {
  return (
    <ContentWrapper>
      <p>{`Username: ${username}`}</p>
      <p>
        Email: <span>{email}</span>
      </p>
      <p>
        Phone: <span>{phone}</span>
      </p>
      <p>
        Website: <span>{website}</span>
      </p>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  span {
    color: ${(props) => props.theme.mainBlue};
  }
`;

export default Contact;
