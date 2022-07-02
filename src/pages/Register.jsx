import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";

const Register = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const shippingInfo = [];
  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      city: enterCity,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  const isLogin = localStorage.getItem("isLogin") === "true";

  function handleLogin() {
    localStorage.setItem("isLogin", true);
    window.location.href = "/";
  }
  function handleLogout() {
    localStorage.removeItem("isLogin");
    window.location.href = "/";
  }


  return (
    <Helmet title="Profile ">
      <CommonSection title="Profile " />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Update Profil</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Jenis Kelamin"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="No Handphone"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Alamat"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                  {!isLogin && <button className="addTOCart__btn me-4" onClick={handleLogin}>REGISTER</button>}
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;

