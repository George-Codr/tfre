import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saurav Kumar </span>
            from <span className="purple"> Patna Bihar, India.</span>
            <br />
            I am currently Pursing my B.tech in Computer Science and Engineering from National Institute of Technology Patna.
            <br />
            I have completed Intermediate in Science from M.H.S College Patna.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)"}}>
            "Hard Work Beats talent when Talent doesn't work hard!"{" "}
          </p>
          <footer className="blockquote-footer">Tim Notke</footer>
        </blockquote>
        <p>
          For more details, visit my <a href="https://github.com/WGeorgeCode" target="_blank" rel="noopener noreferrer">portfolio</a>!
     </p>
      </Card.Body>
    </Card>
    
  );
}

export default AboutCard;
