import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I'm <b className="purple">Anuj Kanjariya</b> — a Software Developer
              with <b className="purple">1.5+ years of experience</b> in building
              modern web and mobile applications. I specialize in
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Development, Shopify Development,
                </b>
              </i>
              and Application Development with a focus on creating scalable,
              high-performance, and user-friendly digital products.
              <br />
              <br />
              I work with technologies like
              <i>
                <b className="purple">
                  {" "}
                  React.js, Next.js, Node.js, React Native, JavaScript, MongoDB,
                  SQL, and Shopify
                </b>
              </i>
              to develop full-stack applications, custom Shopify solutions,
              and cross-platform mobile apps.
              <br />
              <br />
              I enjoy solving real-world problems through clean code,
              modern UI/UX, and efficient system architecture while building
              production-ready applications with strong performance and scalability.
              <br />
              <br />
              Whenever possible, I love building applications using
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
