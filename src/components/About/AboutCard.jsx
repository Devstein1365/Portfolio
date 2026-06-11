import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="blue">Oga Gospel Oligwu</span>
            from <span className="blue">Abuja, Nigeria.</span>
            <br />
            I am currently a 400 Level Mechatronics Engineering student at
            Federal University of Technology, Minna.
            <br />
            Alongside engineering, I have hands-on experience
            building ticketing platforms, business dashboards, REST APIs, and an
            IoT interface that reads live hardware sensor dataand deploying
            production-grade web applications. Over time,
            I’ve built several projects ranging from{" "}
            <b className="blue">Booking Systems</b> and{" "}
            <b className="blue">IoT dashboards</b> to {" "}
            <b className="blue">Marketplace</b> and {" "}
            <b className="blue">Ecommerce Platforms</b>
            <br />
            <br />
            Apart from coding, some other activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Musical Instrument
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching STEM courses
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing knowledge and collaborating with peers
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring electronics & embedded systems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be a mastery at your craft"{" "}
          </p>
          <footer className="blockquote-footer">Gospel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
