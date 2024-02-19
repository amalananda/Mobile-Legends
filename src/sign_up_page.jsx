import { useState } from "react";
import ListNavbar from "./listnavbar";
import Footer from "./footer";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <ListNavbar />
      <Container>
        <div className="form-sign pt-3">
          <div className="col-lg-4">
            <div className="signup-box">
              <header>Sign Up</header>
              <div className="signup-header"></div>
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Email" autoComplete="off" required></input>
              </div>
              <div className="input-box">
                <input type="password" className="input-field" placeholder="Password" autoComplete="off" required></input>
              </div>
              <div className="input-box">
                <input type="password" className="input-field" placeholder="Ulangi Password" autoComplete="off" required></input>
              </div>
              <div className="input-submit">
                <button className="submit-btn" id="submit"></button>
                <label for="submit">
                  <Link style={{ textDecoration: "none", color: "white" }} to={`/login_page`}>
                    Sign In
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default SignUp;
