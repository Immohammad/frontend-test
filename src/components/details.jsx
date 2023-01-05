import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const data = useSelector((state) => state.list.contents);
  const image = data.find((x) => x.id == id);

  console.log(image);
  return <div>
    <img src={image.image} />
    <p>{image.title}</p>
    <p>{image.photographer}</p>
    <p>{image.dateCreated}</p>
    <p>{image.description}</p>
  </div>;
}

export default Details;
