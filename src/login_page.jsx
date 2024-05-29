import { useState } from "react";
import ListNavbar from "./listnavbar";
import Footer from "./footer";
import { Container, Button, Modal, ModalBody, ModalFooter, ModalHeader, Alert } from "reactstrap";
import { Link } from "react-router-dom";

const database = [
  {
    email: "kamal@g.com",
    password: "wow",
  },
  {
    email: "uduh@g.com",
    password: "uduh",
  },
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!password) {
      setError("Password is required");

      return;
    }

    // Add more validation or API call here

    // Dummy check

    const account = database.find((account) => account.email == email);

    if (account?.email && account?.password == password) {
      alert("Login successful");
    } else {
      setError("Invalid email or password");
      // alert("Invalid email or password");
      setAlertMessage("Invalid email or password");
      setIsOpen(true);
    }
  };

  const ModalAction = () => (
    <Modal isOpen={isOpen} toggle={handleClickToggle}>
      <ModalBody style={{ backgroundColor: "#FFA27F" }}>{alertMessage}</ModalBody>
    </Modal>
  );

  return (
    <>
      <ListNavbar />
      <Container>
        <div className="form-log pt-3">
          <div className="col-lg-4 mx-auto">
            <div className="login-box">
              <header>Login</header>
              <ModalAction />
              <div className="login-header"></div>
              {/* {error && <div className="error">{error}</div>} */}
              <form onSubmit={handleSubmit}>
                <div className="input-box">
                  <input type="text" className="input-field" placeholder="Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                  <input type="password" className="input-field" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="forgot">
                  <section>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">Remember Me</label>
                  </section>
                  <section>
                    <a href="#">Forgot password?</a>
                  </section>
                </div>
                <div className="input-submit">
                  <button type="submit" className="submit-btn">
                    {/* <Link style={{ textDecoration: "none", textDecorationColor: "white" }} to={`/`}> */}
                    Sign In
                    {/* </Link> */}
                  </button>
                </div>
              </form>
              <div className="sign-up-link">
                <Link style={{ textDecoration: "none", color: "black" }} to={`/sign_up`}>
                  Don't have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
