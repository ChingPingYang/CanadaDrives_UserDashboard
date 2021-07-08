import React from "react";

function Address({ data: { suite, street, city, zipcode } }) {
  return (
    <div>
      <p>{`${suite} ${street}, ${city}, ${zipcode}`}</p>
    </div>
  );
}

export default Address;
