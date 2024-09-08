import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaDatabase,FaBullseye } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://cplusplus.com" target="_blank" rel="noopener noreferrer">
      <CgCPlusPlus color="#00599C" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
      <DiJavascript1 color="#F7DF1E" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
      <FaDatabase color="#4479A1" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
      <DiNodejs color="#8CC84B" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      <DiReact color="#61DAFB" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
      <FaBullseye color="#0175C2" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
      <DiMongodb color="#4DB33D" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
      <DiPython color="#306998" />
    </a>
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">
      <DiJava color="#007396" />
    </a>
  </Col>
</Row>

  );
}

export default Techstack;
