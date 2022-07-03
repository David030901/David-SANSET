import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const ProfilUser= () => {

  return (
    <Helmet title="Profile ">
      <CommonSection title="User Profile" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">User Profile</h6>
              <form className="checkout__form">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="shodik setiawan"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="nomor"
                    placeholder="08518239273"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Purwokerto"
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProfilUser;
