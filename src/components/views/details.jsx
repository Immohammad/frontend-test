import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
  //we achieve this image's id by url; find that from our store and use it.
  const { id } = useParams();
  const data = useSelector((state) => state.list.contents);
  const image = data.find((x) => x.id == id);

  return (
    <div style={{ margin: "20pt auto" , maxWidth: '85%'}}>
      <img src={image.image} />
      <div id="detailsContainer">
        <hr />
        <h2>{image.title}</h2>
        <hr />
        <h2>عکاس</h2>
        <p>{image.photographer}</p>
        <hr />
        <h2>تاریخ ثبت تصویر</h2>
        <p>{image.createdAt.substring(0, 10)}</p>
        <hr />
        <h2>شرح تصویر</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
}

export default Details;
