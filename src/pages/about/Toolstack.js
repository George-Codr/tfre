import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPycharm,
} from "react-icons/si";
import{FaGit,FaFileCode} from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
        <SiVisualstudiocode color="#007ACC" />
      </a>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
        <SiPycharm color="#21D789" />
      </a>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
        <SiPostman color="#FF6C00" />
      </a>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">
        <FaFileCode color="#90EE90"/>
      </a>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
        <FaGit color="#F05032" />
      </a>
    </Col>
  </Row>
  
  );
}

export default Toolstack;
