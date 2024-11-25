import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahana R </span>
            &nbsp;from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently working as a <span className="purple">software developer</span> at Headrun Technologies.
            <br />
            I have completed <span className="purple">BE</span> in <span className="purple">Information Science and Engineering</span> at Atria Institute of Technology.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
