import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function Home() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((error) => {
        if (error.response.status == 404) setCards([]);
      });
  }, []);

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
