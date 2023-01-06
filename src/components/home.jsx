import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import { useSelector } from "react-redux";

function Home() {
  // const [cards, setCards] = useState([]);
  const cards = useSelector((state) => state.list.contents);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/sample")
  //     .then((response) => {
  //       setCards(response.data);
  //       // console.log(response.data)
  //     })
  //     .catch((error) => {
  //       if (error.response.status == 404) setCards([]);
  //     });
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://reqres.in/api/users")
  //     .then((response) => {
  //       setCards(response.data.data);
  //     })
  //     .catch((error) => {
  //       if (error.response.status == 404) setCards([]);
  //     });
  // }, []);

  return (
      <div className="row timeline">
        {cards ? (
          cards.map((unit) => (
            <div className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
              <Card user={unit} />
            </div>
          ))
        ) : (
          <div>درخواستی یافت نشد</div>
        )}
      </div>
  );
}

export default Home;
