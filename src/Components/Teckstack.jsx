import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiPython,
    DiHtml5,
    DiCss3,
} from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs,
    SiPostgresql,
    SiBootstrap,
    SiTailwindcss,
    SiFlutter,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiFlutter />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiFirebase />
            </Col>
        </Row>
    );
}

export default Techstack;
