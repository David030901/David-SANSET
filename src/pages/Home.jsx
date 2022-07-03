import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-03.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-01.png";
import products from "../assets/fake-data/products.js";

const featureData = [
  {
    title: "Cheap Price",
    imgUrl: featureImg01,
    desc: "Every food got discount 50% Off and in condition decent to consume.",
  },

  {
    title: "Partnership",
    imgUrl: featureImg02,
    desc: "Partnership with personal or with company.",
  },
  {
    title: "No More Wasting Foods",
    imgUrl: featureImg03,
    desc: "Buy in sanset helping reducing waste foods.",
  },
];

const Home = () => {
  const [allProducts] = useState(products);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Solution for delicious foods with cheap price</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> You Come <br /> To The
                  <span> Right Site !</span>
                </h1>

                <h6>
                  Jakarta - Semarang
                </h6>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order Now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See All Foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Easy To Order
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    Discount 50% off 
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">SANSET</h5>
              <h2 className="feature__title">Hungry Solution </h2>
              <h2 className="feature__title">
                Without <span>Leaving Home</span>
              </h2>
              { }
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
