import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { update } from "./store/listSlice";

import AboutUs from "./components/aboutUs";
import Details from "./components/details";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Navbars from "./components/navbars";
import Footer from "./components/footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8000/sample")
      .then((response) => {
        dispatch(update(response.data));
        // console.log(response.data)
      })
      .catch((error) => {
        if (error.response.status == 404) dispatch(update([]));
      });
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
