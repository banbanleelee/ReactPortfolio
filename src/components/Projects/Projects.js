import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DealLifter from "../../Assets/Projects/Deallifter.png";
import WeGotFlavor from "../../Assets/Projects/WeGotFlavor.png";
import MovieHunter from "../../Assets/Projects/MovieHunters.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="yellow">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DealLifter}
              isBlog={false}
              title="DealLifter"
              description="A UGC-based eCommerce platform for deals and discounts. Built with React.js, Apollo GraphQL, MongoDB, and Bulma. Supports account registration, encryption(JWT and Bcrypt), and real-time data transmission and rendering."
              link="https://github.com/banbanleelee/DealLifter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeGotFlavor}
              isBlog={false}
              title="We Got Flavors"
              description="A MERN-based database management application for event managers. Built with React.js, Apollo GraphQL, MongoDB, and Bootstrap. Supports real-time data updates including adding, editing and deletion."
              link="https://github.com/banbanleelee/WeGotFlavorsDatabase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieHunter}
              isBlog={false}
              title="Movie Hunters"
              description="A real-time movie search engine using third-party APIs to provide detailed information based on user input. Built with jQuery. Uses IMDB API to gather, provide, and render data. Uses local storage to customize user experience."
              link="https://github.com/banbanleelee/MovieHunter"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
