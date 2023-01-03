import React from "react";

function Card(props) {
  return (
    <div>
      <div key={props.user.id}>
        <p>
          <strong>{props.user.first_name}</strong>
        </p>
        <p>{props.user.email}</p>
        <img key={props.user.avatar} src={props.user.avatar} />
      </div>
    </div>
  );
}

export default Card;
