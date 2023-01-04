import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      key={props.user.id}
      className="card"
      onClick={() => navigate(`/details/${props.user.id}`)}
    >
      <img key={props.user.avatar} src={props.user.avatar} />
      <p>
        <strong>{props.user.first_name}</strong>
        <p>{props.user.email}</p>
      </p>
      <button id="delete">×</button>
    </div>
  );
}

export default Card;
