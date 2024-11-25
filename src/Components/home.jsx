import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/developer1.jpg";
import Typewriter from "typewriter-effect";
import {
    AiOutlinePhone,
    AiOutlineMail,
} from "react-icons/ai";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                This is
                                <strong className="main-name"> SAHANA R</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Software Developer",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="home-about-description">
                            <h1 style={{ fontSize: "2.6em" }}>
                                LET ME <span className="purple"> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="home-about-body">
                                With <b className="purple">2.5 years</b> of experience in React.js, building responsive and efficient web applications.
                                <br />
                                <br />Interested in
                                <i>
                                    <b className="purple">&nbsp;Python &nbsp;</b>and&nbsp;<b className="purple">React.js &nbsp;</b>for developing scalable solutions and exploring new technologies.
                                </i>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="home-about-social">
                            <h1>GET IN TOUCH WITH ME</h1>
                            <ul className="home-about-social-links">

                                <li className="social-icons">
                                    <a
                                        href="https://twitter.com/Soumyajit4419"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiOutlineMail />
                                    </a>
                                    <span className="contact-info">sahanar135@gmail.com</span>

                                </li>
                                <li className="social-icons">
                                    <a
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiOutlinePhone />
                                    </a>
                                    <span className="contact-info"> 9740908239</span>

                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </section>
    );
}

export default Home;
