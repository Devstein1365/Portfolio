import React from "react";
// import { Col, Row } from "react-bootstrap";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import { SiFirebase, SiNestjs} from "react-icons/si";

function Techstack() {
   const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiPhp />, name: "PHP" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <DiPython />, name: "Python" },
  ];
  return (
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${idx}`}>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
