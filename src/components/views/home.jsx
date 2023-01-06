import React from "react";
import Card from "../card";
import { useSelector } from "react-redux";

function Home() {
  const cards = useSelector((state) => state.list.contents);

  return (
    <div className="row timeline">
      {cards ? (
        cards.map((unit) => (
          <div className="col-xs-12 col-sm-6 col-md-3 col-xl-2">
            <Card image={unit} />
          </div>
        ))
      ) : (
        <div>درخواستی یافت نشد</div>
      )}
    </div>
  );
}

export default Home;
