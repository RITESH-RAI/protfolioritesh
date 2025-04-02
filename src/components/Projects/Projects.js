import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chainAnalytics from "../../Assets/Projects/chain.png";
import krishiCare from "../../Assets/Projects/krishicare.jpeg";
import BellyBites from "../../Assets/Projects/Bellybites.png";
import heartDisease from "../../Assets/Projects/Heart.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krishiCare}
              title="Krishi Care"
              description="An AI-powered agricultural consultancy platform that improves farming efficiency for 500+ farmers by optimizing soil health and crop productivity."
              ghLink="https://github.com/RITESH-RAI/Krishi-Care"
              demoLink="https://krishicare.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BellyBites}
              title="Belly Bites"
              description="A full-stack food delivery platform with a secure payment gateway, designed for seamless transactions and scalable order management."
              ghLink="https://github.com/RITESH-RAI/Underbelly-Food-Delivery"
              demoLink="https://underbellydelivery.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heartDisease}
              title="Heart Disease Prediction"
              description="An ML-based diagnostic tool that analyzes patient records to predict heart disease risks, assisting medical professionals in early diagnosis."
              ghLink="https://github.com/RITESH-RAI/Heart-Disease-Prediction-ml" // Add your GitHub link here if available
              demoLink="https://underbellydelivery.vercel.app/" // Add your demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chainAnalytics}
              title="Chain Analytics"
              description="A real-time cryptocurrency tracking app built with React.js, integrating CoinGecko API to fetch live crypto prices and switch between different currencies."
              ghLink="https://github.com/RITESH-RAI/Chain-Analytics"
              demoLink="chainanalytics.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
