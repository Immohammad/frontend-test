import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setContents } from "./store/listSlice";
import { ToastContainer,toast } from 'react-toastify';

import AboutUs from "./components/views/aboutUs";
import Details from "./components/views/details";
import Home from "./components/views/home";
import NotFound from "./components/notFound";
import Navbars from "./components/layouts/navbars";
import Footer from "./components/layouts/footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //at first all of data is fetched from mockAPI and save in our redux store.
    //In the continuation of the project we use data that saved in our store.
    axios
      .get("https://63b7707d4f17e3a931d4021e.mockapi.io/api/v1/images")
      .then((response) => {
        dispatch(setContents(response.data));
      })
      .catch((error) => {
        toast.error("داده ها دریافت نشد. مدتی بعد تلاش کنید.");
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
        <ToastContainer position='top-left' autoClose={3000}/>
      </Router>
    </div>
  );
}

export default App;
