import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import hotelImg from "../../Assets/Projects/hotel.png";
import examImg from "../../Assets/Projects/online-exam1.jpeg";
import unifyrImg from "../../Assets/Projects/unifyr.png";
import wonderImg from "../../Assets/Projects/wondertix.png";
import kanbanImg from "../../Assets/Projects/kanban.jpg";
import cygenImg from "../../Assets/Projects/cygen.png";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Particle />
        <h1 className="project-heading">
          My Recent <strong className="blue">Works</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've built and learned from.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* unifyr  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unifyrImg}
              isBlog={false}
              title="Unifyr"
              description="A modern React-based dashboard application demonstrating component-based architecture, reusable UI components, and responsive layouts across multiple service categories."
              ghLink="https://github.com/Devstein1365/unifyr_frontend"
              demoLink={"https://unifyr-sigma.vercel.app"}
            />
          </Col>

          {/* CyGen  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cygenImg}
              isBlog={false}
              title="CyGen Dashboard"
              description="This is a dashboard application for an ESP8266 project called CyGen. It provides a user interface to display real-time sensor data like Battery, Speed, Voltage, and Power Flow."
              ghLink="https://github.com/Devstein1365/CyGen_frontend"
              demoLink={"https://cygen13.vercel.app/"}
            />
          </Col>

          {/* wondertix  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wonderImg}
              isBlog={false}
              title="Wondertix"
              description="A modern ticketing platform with a clean user interface, form workflows, and responsive design, built for a large event."
              ghLink="https://github.com/Devstein1365/wondertix"
              demoLink={"https://wondertix.vercel.app"}
            />
          </Col>

          {/* Hotel Management API */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelImg}
              isBlog={false}
              title="Hotel Management API"
              description="A backend REST API built with Node.js, Express, and MongoDB. Handles user authentication, room management, availability tracking, and booking operations.Pure backend architecture."
              ghLink="https://github.com/Devstein1365/hotel-management"
              demoLink={"https://hotel-management-1-3i2q.onrender.com/"}
            />
          </Col>

          {/* Kanband Board  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanbanImg}
              isBlog={false}
              title="Kanban Board"
              description="A mobile-first PWA for running your personal 30-day coding sprint. Plan daily tasks, track projects, log progress, and stay consistent — all offline, no account needed."
              ghLink="https://github.com/Devstein1365/Kanban-Board"
              demoLink={"https://kanband13.vercel.app"}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
