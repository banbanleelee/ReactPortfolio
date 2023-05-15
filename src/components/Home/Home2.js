import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiTwotoneMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I offer a unique blend of <b className="yellow">marketing</b> and <b className="yellow">psychology</b> expertise to optimize user experiences on the web while committing to continuous learning and expanding my technical skill set.
              <br />
              <br />
              After completing <b className="yellow">Georgia Tech Coding Bootcamp</b>, I was recommended to a <b className="yellow">Teaching Assistant</b> position where I tutored and assisted in the graduation of <b>~80</b> students across <b>2</b> cohorts.
              <br />
              <br />
              My passion is leveraging <b className="yellow">MERN stack</b> to build <b className="yellow"> practical</b>, <b className="yellow">efficient</b>, and <b className="yellow">creative </b> solutions.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4}>
            <div></div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/banbanleelee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yixuan-zhang-11b743b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sallyzhang0205@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="yellow">connect </span>with me <span></span>
            </p>
            <p>💛</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
