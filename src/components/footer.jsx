import logo from "./stuffs/logo.png";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import 'mdbreact/dist/css/mdb.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <img src={logo} width="110px" style={{marginLeft:"25px"}}/>
          <MDBIcon fab icon="facebook-f" className="socials" />
          <MDBIcon fab icon="twitter" className="socials" />
          <MDBIcon fab icon="google" className="socials" />
          <MDBIcon fab icon="instagram" className="socials" />
          <MDBIcon fab icon="linkedin-in" className="socials" />
          <MDBIcon fab icon="telegram" className="socials" />
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        تمامی حقوق متعلق به ترابرنت می‌باشد.
      </div>
    </MDBFooter>
  );
}