import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import gridsentrylogo from "../Assets/gridsentrylogo.svg";
import headrunlogo from "../Assets/headrunlogo.svg";


const Project = () => {
    const projects = [
        {
            "companyname": "GridSentry",
            "techstacks": ["ReactJS", "HTML", "CSS", "Javascript", "Bootstrap", "AWS"],
            "image": gridsentrylogo,
            "details": [
                "Led the front-end development and integration of the Webgaudit customer portal and GAudit platform, enhancing role-based access, inventory management, and vulnerability scanning, reducing vulnerability detection time by 15% and improving operational efficiency by 20%.",
                "Developed application state management solutions using Redux and React Context API to streamline data flow across 10+ components, enhancing responsiveness and reducing load times by an average of 200 milliseconds.",
                "Designed and implemented responsive user interfaces across platforms, improving usability and reducing bounce rates by 15%."
            ]
        },
        {
            "companyname": "Headrun Technologies",
            "techstacks": ["Python", "NextJS", "HTML", "CSS", "Javascript", "Django"],
            "image": headrunlogo,
            "details": [
                "Utilized Python for back-end tasks, including API development, integration, and data processing, streamlining workflows and improving system efficiency.",
                "Built robust and scalable REST APIs using Django to ensure efficient data flow, seamless integrations, and smooth functionality across applications.",
                "Leveraged CSS Grid and Flexbox to create responsive layouts, reducing dependency on media queries by 25% and enhancing mobile-first design, resulting in a 20% increase in mobile traffic.",
                "Deployed and maintained scalable applications on AWS EC2 instances, ensuring 99.9% uptime and adhering to high security standards for reliable performance."
            ]
        }
    ]
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent &nbsp; <strong className="purple">Experience </strong>
                </h1>

                {
                    projects.map((data) => {
                        return (
                            <div class="monitoringgrid">
                                <div class="monitoringcard">
                                    <div class="monitoringcard-inner">
                                        <div class="monitoringcard-front">
                                            <div class="monitoringicon">
                                                <img src={data?.image} alt="Company Logo" class="company-logo" />
                                            </div>
                                            <div class="monitoringtitle">{data?.companyname ?? ""}</div>
                                            <div className="chips">
                                                {data?.techstacks?.map((tech) => (
                                                    <span className="chip">{tech ?? ""}</span>

                                                ))}
                                            </div>
                                        </div>
                                        <div class="monitoringcard-back">
                                            <div class="monitoringdescription">
                                                <ul>
                                                    {
                                                        data?.details.map((techpoints) => (
                                                            <li class="monitoringpoints">{techpoints ?? ""}</li>
                                                        ))
                                                    }


                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }



            </Container>
        </Container>
    );
}

export default Project;