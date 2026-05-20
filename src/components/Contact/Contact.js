import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";

const contactEmail = "anujkanjariya682004@gmail.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  useEffect(() => {
    if (!statusMessage) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [statusMessage]);

  function handleChange(event) {
    const { name, value } = event.target;

    setStatusMessage("");
    setStatusType("");

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function sendEmail(e) {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    emailjs
      .send(
        "service_woykcic",
        "template_hc01lqh",
        {
          name: formData.name,
          email: formData.email,
          message: formData.description,
        },
        "jPG6_AzcdjgkEnJtZ" // Replace with your actual user ID
      )
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setStatusType("success");

        setFormData({
          name: "",
          email: "",
          description: "",
        });
      })
      .catch((error) => {
        console.log("EMAIL ERROR:", error);
        setStatusMessage("Failed to send message. Please try again.");
        setStatusType("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container fluid className="contact-section">
      <Particle />

      <Container>
        <Row className="contact-content">
          <Col md={5} className="contact-info">
            <h1 className="project-heading">
              Let&apos;s <strong className="purple">Connect</strong>
            </h1>

            <p>
              Have a project, Shopify store, web app, or collaboration idea?
              Send the details and I&apos;ll get back to you.
            </p>

            <div className="contact-email">
              <AiOutlineMail />

              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
          </Col>

          <Col md={7}>
            <Form className="contact-form" onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Description</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={6}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}

                <AiOutlineSend />
              </Button>
              {statusMessage && (
                <p className={`contact-status ${statusType}`}>
                  {statusMessage}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
