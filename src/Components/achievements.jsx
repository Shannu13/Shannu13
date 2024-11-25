import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Achievements = () => {
    let certifications = [
        {
            "count": "01",
            "certificatename": "The Complete ReactJS course from basics to advanced",
            "by": "Udemy"
        },
        {
            "count": "02",
            "certificatename": "Python for absolute beginners",
            "by": "Udemy"
        },
        {
            "count": "03",
            "certificatename": "Academy for Introduction to IOT",
            "by": "Cisco Networking"
        },
        {
            "count": "04",
            "certificatename": "AWS S3 Basics",
            "by": "Coursera Project Network"
        },
        {
            "count": "05",
            "certificatename": "The Fullstack Course",
            "by": "Coursera"
        },
    ]
    return (

        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">Certifications</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {
                        certifications?.map((certificate) => {
                            return (
                                <div class="compliancecard">
                                    <div class="complianceicon-section">
                                        <div class="compliancenumber-icon">
                                            <span>{certificate?.count ?? ""}</span>
                                        </div>
                                    </div>
                                    <div class="compliancecontent-section">
                                        <h3>{certificate?.certificatename ?? ""} </h3>
                                        <p>{certificate?.by ?? ""}</p>
                                    </div>
                                </div>
                            )
                        })
                    }




                </Row>
            </Container>



        </Container>
    )
}

export default Achievements;