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
    axios
      .delete(
        `https://63b7707d4f17e3a931d4021e.mockapi.io/api/v1/images/${props.user.id}`
      )
      .then(() => dispatch(deleteCard(props.user.id)))
      .catch((error) => {
        console.error("There was an error!", error);
      });
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
      <button id="delete" onClick={handleDelete}>
        ×
      </button>
    </div>
  );
}

export default Card;
