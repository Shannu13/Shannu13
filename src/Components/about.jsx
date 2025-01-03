import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Teckstack";
import AboutCard from "./aboutcard";
import myimg from "../Assets/myimg.jpg";
import Toolstack from "./Toolstack";
const About = () => {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <AboutCard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "10px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <img src={myimg} alt="about" className="img" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional &nbsp;<strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools &nbsp;</strong> I use
                </h1>
                <Toolstack />
            </Container>
        </Container>
    )
}

export default About;