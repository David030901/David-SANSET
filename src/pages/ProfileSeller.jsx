import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";

const Profile = () => {
  const [enterName, setEnterName] = useState("");
  const [enterJK, setEnterJK] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const shippingInfo = [];
  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      jeniskelamin: enterJK,
      phone: enterNumber,
      city: enterCity,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="ProfileSeller ">
      <CommonSection title="Profile Seller" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Update Profil</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="jenis kelamin"
                    placeholder="Gender"
                    required
                    onChange={(e) => setEnterJK(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="nomor"
                    placeholder="Whatsapp"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Update Profile
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Profile;
