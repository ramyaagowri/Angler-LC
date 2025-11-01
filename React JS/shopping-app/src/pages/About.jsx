import React from "react";
import { Accordion } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <h2>About Us</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Our Mission</Accordion.Header>
          <Accordion.Body>
            We aim to deliver quality products at affordable prices.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Our Team</Accordion.Header>
          <Accordion.Body>
            Dedicated professionals committed to customer satisfaction.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
