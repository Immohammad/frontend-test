import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import { useSelector } from "react-redux";

function Home() {
  // const [cards, setCards] = useState([]);
  const cards = useSelector((state) => state.list.contents)
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
    <div>
      <div className="flex">
        {cards ? (
          cards.map((unit) => <Card user={unit} />)
        ) : (
          <div>درخواستی یافت نشد</div>
        )}
      </div>
    </div>
  );
}

export default Home;
