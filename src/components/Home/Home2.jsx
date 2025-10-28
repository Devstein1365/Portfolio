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
              I discovered programming during my journey as a Mechatronics
              Engineering student, and it quickly became more than just a
              skill—it became my craft. 🚀
              <br />
              <br />I work with modern web technologies and I’m fluent in
              <i>
                <b className="blue">
                  {" "}
                  JavaScript, React.js, Next.js Tailwind CSS, Node.js,
                  Express.js, PHP, MySQL and nest.js.
                </b>
              </i>
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
              Whenever possible, I channel my creativity into developing
              projects that solve everyday problems, using tools like{" "}
              <b className="blue"> Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js &nbsp;</b>
              </i>
              and &nbsp;
              <i>
                <b className="blue">backend APIs</b>
              </i>
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
                  href="https://github.com/devstein1365"
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
