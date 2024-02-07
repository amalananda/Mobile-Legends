import { useState } from "react";
import ListNavbar from "./listnavbar";
import Footer from "./footer";
import { Container, Button } from "reactstrap";

const SignUp = () => {
  return (
    <>
      <ListNavbar />
      <Container>
        <div className="form-log pt-3">
          <div className="col-lg-4">
            <div className="login-box">
              <header>Login</header>
              <div className="login-header"></div>
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Email" autoComplete="off" required></input>
              </div>
              <div className="input-box">
                <input type="password" className="input-field" placeholder="Password" autoComplete="off" required></input>
              </div>
              <div className="forgot">
                <section>
                  <input type="checkbox" id="check"></input>
                  <label for="check">Remember Me</label>
                </section>
                <section>
                  <a href="#">Forgot password ?</a>
                </section>
              </div>
              <div className="input-submit">
                <button className="submit-btn" id="submit"></button>
                <label for="submit">Sign In</label>
              </div>
              <div className="sign-up-link">
                <p>Don't have account ?</p>
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
