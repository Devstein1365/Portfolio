import React from "react";
// import { Col, Row } from "react-bootstrap";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
   const tools = [
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiVercel />, name: "Vercel" },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${idx}`}>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
