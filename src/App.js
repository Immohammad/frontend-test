import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs";
import Details from "./components/details";
import Home from "./components/home";
import NotFound from "./components/notFound";

import Navbars from "./components/navbars";
import Footer from "./components/footer";

function App() {
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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
