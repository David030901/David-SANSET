import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

const isLogin = localStorage.getItem("isLogin") === "true";

function handleLogin() {
  localStorage.setItem("isLogin", true);
  window.location.href = "/";
}
function handleLogout() {
  localStorage.removeItem("isLogin");
  window.location.href = "/";
}
const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <div className="App">
              <h1> {isLogin ? "YOU ARE ALREADY LOGIN" : "YOU ARE NOT LOGIN"}</h1>
            </div>

            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <section>
                {isLogin ? (
                  <>
                    <div>
                      <div>
                        <button
                          className="addTOCart__btn me-4"
                          onClick={handleLogout}
                        >
                          LOG OUT
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <form className="form mb-5" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="email"
                            placeholder="Email"
                            required
                            ref={loginNameRef}
                          />
                        </div>
                        <div className="form__group">
                          <input
                            type="password"
                            placeholder="Password"
                            required
                            ref={loginPasswordRef}
                          />
                        </div>
                        <div>
                          <button
                            className="addTOCart__btn me-4"
                            onClick={handleLogin}
                          >
                            LOGIN
                          </button>
                        </div>
                      </form>
                      <Link to="/register">Need an account ? Register</Link>
                    </div>
                  </>
                )}
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;