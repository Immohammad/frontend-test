import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCard } from "../store/listSlice";
import axios from "axios";

function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteCard(props.user.id));
    axios.delete(`http://localhost:8000/sample/${props.user.id}`);
  };
  return (
    <div
      key={props.user.id}
      className="card"
      onClick={() => navigate(`/details/${props.user.id}`)}
    >
      <img key={props.user.image} src={props.user.image} />
      <p>
        <strong>{props.user.title}</strong>
      </p>
      {/* <img key={props.user.avatar} src={props.user.avatar} />
      <p>
        <strong>{props.user.first_name}</strong>
        <p>{props.user.email}</p>
      </p> */}
      <button id="delete" onClick={handleDelete}>
        ×
      </button>
    </div>
  );
}

export default Card;
