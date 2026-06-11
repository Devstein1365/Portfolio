import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Profile.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered programming through Mechatronics Engineering and it
              became the most serious thing I do.
              <br />
              <br /> I work across the full MERN stack —
              <b className="blue"> React</b> on the frontend,
              <b className="blue"> Node.js and Express</b> on the backend,
              <b className="blue"> MongoDB</b> for data. I have shipped a
              production ticketing platform for a real Nigerian event, built a
              fullstack business management system with
              <b className="blue"> live API endpoints</b> and
              <b className="blue"> JWT authentication</b>, and created a
              real-time IoT dashboard that connects hardware sensor data to a
              web interface.
              <br />
              <br />
              My interests lie in building &nbsp;
              <i>
                <b className="blue"> real-world web applications</b> from{" "}
                <b className="blue">fintech solutions</b> and{" "}
                <b className="blue"> online systems</b> to marketplaces and
                service platforms.{" "}
              </i>
              <br />
              <br />
              &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ width: "18em", borderRadius: "50%" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Devstein1365"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Devstein1365"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gospel-ogah-3342a5296/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
