import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Oga Gospel Oligwu </span>
            from <span className="blue"> Nigeria.</span>
            <br />
            I am currently a 300 Level Mechatronics Engineering student at
            Federal University of Technology, Minna.
            <br />
            Alongside engineering, I am deeply passionate about web development.
            Over time, I’ve built several projects ranging from{" "}
            <b className="blue">Hotel Booking System</b> and{" "}
            <b className="blue">E-Commerce platforms</b> to an{" "}
            <b className="blue">Online Clearance System</b>
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
              <ImPointRight /> Teach STEM courses
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
