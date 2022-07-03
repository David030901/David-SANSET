import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";

const Profile = () => {
  const [ setEnterName] = useState("");
  const [ setEnterJK] = useState("");
  const [ setEnterNumber] = useState("");
  const [ setEnterCity] = useState("");  

  return (
    <Helmet title="Profile ">
      <CommonSection title="Profile " />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Update Profil</h6>
              <form className="checkout__form" >
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
                    type="jenis kelamin"
                    placeholder="Jenis Kelamin"
                    required
                    onChange={(e) => setEnterJK(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="nomor"
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
                <button type="submit" className="addTOCart__btn">
                  Update Profil
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
