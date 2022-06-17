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
              I fell in love with programming and dedicated myself since 2021.
              <br />
              <br />I am fluent in classics like
                <b className="yellow"> HTML, CSS and Javascript. </b>
              <br />
              <br />
              My field of Interest's is building new &nbsp;
                <b className="yellow">MERN applications </b> to provide <b className="yellow"> practical</b>,  <b className="yellow">efficient</b>, and  <b className="yellow">creative </b> solutions.
              <br />
              <br />
              I never cease to hone my skills with modern Javascript library and frameworks, and am currently learning
              <b className="yellow"> Next.js</b> and <b className="yellow"> Redux.js</b>.
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
                  href="mailto:sallyyixuanzhang@gmail.com"
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
