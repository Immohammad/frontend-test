import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCard } from "../store/listSlice";
import axios from "axios";
import { toast } from "react-toastify";

function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //in this function at first request to server and delete image from database.
  //if it was ok, after that image would delete from our store.
  const handleDelete = (e) => {
    e.stopPropagation();
    axios
      .delete(
        `https://63b7707d4f17e3a931d4021e.mockapi.io/api/v1/images/${props.image.id}`
      )
      .then(() => dispatch(deleteCard(props.image.id)))
      .catch(() => {
        toast.error("حذف با خطا مواجه شد");
      });
  };

  return (
    <div
      key={props.image.id}
      className="card"
      onClick={() => navigate(`/details/${props.image.id}`)}
    >
      <img key={props.image.image} src={props.image.image} />
      <p style={{ padding: "10px" }}>
        <strong>{props.image.title}</strong>
      </p>
      <button id="delete" onClick={handleDelete}>
        ×
      </button>
    </div>
  );
}

export default Card;
