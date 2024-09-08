import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Part from "../../components/Part";
import Home2 from "./index2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Part />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Saurav Kumar</strong>
              </h1>

              <div style={{ padding: 42, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <section className="profile-section">
                   <div className="svg-background">
                   <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,0 C50,100 50,0 100,100 L100,0 L0,0 Z" />
                   </svg>
               </div>
               <div className="profile-photo-container">
                   <img src="photo.jpg" alt="Profile" className="profile-photo" />
               </div>
              
            </section>
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
