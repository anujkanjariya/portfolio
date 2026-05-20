import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import construction from "../../Assets/Projects/construction.png";
import mediasavebox from "../../Assets/Projects/mediasavebox.png";
import aussiemate from "../../Assets/Projects/aussiemate.png";


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
              imgPath={construction}
              isBlog={false}
              title="Construction Sarthi"
              description="Construction Sarthi is a construction management project with AI-powered calculations and multiple modules for planning, material tracking, estimation, and team coordination. It helps builders, supervisors, contractors, vendors, and suppliers manage project work more efficiently from one platform."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.constructionsaarthi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediasavebox}
              isBlog={false}
              title="Media Savebox"
              description="Media Savebox is my personal project for downloading YouTube videos in high quality. It provides a simple, fast, and user-friendly experience where users can paste a video link, fetch available formats, and save videos for offline use."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://mediasavebox.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aussiemate}
              isBlog={false}
              title="AussieMate"
              description="AussieMate is a cleaning management project that helps connect customers with professional cleaners. It supports service booking, cleaner coordination, and customer management to make the cleaning service process simple and organized."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.aussiemate.com.au/"              
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
