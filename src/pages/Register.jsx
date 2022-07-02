import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const Register = () => {
    const [enterName] = useState("");
    const [enterEmail] = useState("");
    const [enterNumber] = useState("");
    const [enterCity] = useState("");
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

    function handleRegister() {
        localStorage.setItem("isLogin", true);
        window.location.href = "/";
    }


    return (
        <Helmet title="Register ">
            <CommonSection title="Register" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        type="nama"
                                        placeholder="Nama Lengkap"
                                        required
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="no"
                                        placeholder="No Handphone"
                                        required
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="ulangipassword"
                                        placeholder="Ulangi Password"
                                        required
                                    />
                                </div>
                                {!isLogin && <button className="addTOCart__btn me-4" onClick={handleRegister}>REGISTER</button>}
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;

