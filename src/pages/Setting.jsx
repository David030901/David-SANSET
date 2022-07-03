import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector} from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Helmet title="Cart">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Update Profile</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    {}
                  </thead>
                  {}
                </table>
              )}

              <div className="mt-4">
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/profile">User Profile</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Cart;
