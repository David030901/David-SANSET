import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";

const AddProduct = () => {
  const [setEnterName] = useState("");
  const [setEnterJM] = useState("");
  const [setEnterNumber] = useState("");
  const [ setEnterDesc] = useState("");

  return (
    <Helmet title="Add Product">
      <CommonSection title="Add Product" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Add Product</h6>
              <form className="checkout__form">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Food Name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="jenis makanan"
                    placeholder="Food Categories"
                    required
                    onChange={(e) => setEnterJM(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="harga"
                    placeholder="Price"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Description"
                    required
                    onChange={(e) => setEnterDesc(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Add
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AddProduct;
