import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import examImg from "../../Assets/Projects/online-exam1.jpeg";
import ecommerceImg from "../../Assets/Projects/cara-ecommerce.jpeg";
import hotelImg from "../../Assets/Projects/hotelAPI.jpg";
import blogImg from "../../Assets/Projects/blog.jpeg";
import phpExam from "../../Assets/Projects/examPHP.jpeg";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Particle />
        <h1 className="project-heading">
          My Recent <strong className="blue">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve built and learned from.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Online Exam System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={examImg}
              isBlog={false}
              title="Online Exam System"
              description="A dynamic online examination platform built with pure HTML, CSS, and JavaScript. Lets users take exams and view results in real time."
              ghLink="https://github.com/Goldstein1365/Online-Exam-System"
              demoLink={"https://goldstein1365.github.io/Online-Exam-System/"}
            />
          </Col>

          {/* Cara–ecommerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="Cara–ecommerce"
              description="A responsive e-commerce website with a dynamic shopping cart, newsletter alerts, and JS interactivity—built with HTML, CSS & vanilla JavaScript."
              ghLink="https://github.com/Goldstein1365/Cara-ecommerce"
              demoLink={"https://goldstein1365.github.io/Cara-ecommerce/"}
            />
          </Col>

          {/* Hotel Management API */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelImg}
              isBlog={false}
              title="Hotel Management API"
              description="A RESTful backend API for managing hotel rooms, bookings, and user authentication—built using Node.js, Express.js, and MongoDB."
              ghLink="https://github.com/Goldstein1365/hotel-management"
              demoLink={"https://hotel-management-1-3i2q.onrender.com/"}
            />
          </Col>

          {/* Node.js Blog Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogImg}
              isBlog={false}
              title="Node.js Blog Platform"
              description="A blogging platform with user-authored posts, built using Node.js, Express, MongoDB, and EJS templating."
              ghLink="https://github.com/Goldstein1365/nodejs-blog"
              demoLink={null}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phpExam}
              isBlog={false}
              title="Exam System PHP"
              description="Enhanced the online exam system by integrating a backend with PHP and MySQL, allowing for dynamic user management and exam results."
              ghLink="https://github.com/Goldstein1365/Exam_System_PHP"
              demoLink={null}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
