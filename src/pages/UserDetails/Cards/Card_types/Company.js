import React from "react";

function Company({ data: { name, bs, catchPhrase } }) {
  return (
    <div>
      <p>{name}</p>
      <p>{bs}</p>
      <p>{`"${catchPhrase}"`}</p>
    </div>
  );
}

export default Company;
