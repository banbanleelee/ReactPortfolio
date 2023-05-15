import React from "react";
import Card from "react-bootstrap/Card";
import { MdOutlineVideogameAsset, MdPets } from "react-icons/md";
import { CgGym } from "react-icons/cg";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, thanks for visiting! 👋
            <br />
            I live in <span className="yellow"> Florida</span>, and originally from <span className="yellow"> China</span>.
            <br />
            <br />
            Apart from coding, I also devote myself in
          </p>
          <ul>
            <li className="about-activity">
              <CgGym /> Doing workouts
            </li>
            <li className="about-activity">
              <MdOutlineVideogameAsset /> Playing video games
            </li>
            <li className="about-activity">
              <MdPets /> Hanging out with my pups
            </li>
          </ul>

          <p style={{ color: "#d9ae16" }}>
            "The strongest light is the one within."{" "}
          </p>
          <footer className="blockquote-footer"><i> Lux, League of Legends</i></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
