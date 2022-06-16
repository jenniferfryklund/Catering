import React from "react";
import "../App.css";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <div className="mt-5 mb-5 fontstyle-1">
        <h1>Kontakt</h1>
      </div>

      <>
        <Form.Group className="mb-2">
          <Form.Label>Välj typ av meddelande:</Form.Label>
          <Form.Select>
            <option>Välj</option>
            <option>Beställning</option>
            <option>Bokningsförfrågan</option>
            <option>Jobbansökan</option>
            <option>Synpunkt</option>
            <option>Övrigt</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ditt meddelande</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Ditt namn:</Form.Label>
          <Form.Control type="name" placeholder="Namn" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefonnummer:</Form.Label>
          <Form.Control type="Phonenumber" placeholder="Tel" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Skicka en kopia till mig"
            disabled
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Skicka
        </Button>
      </>
    </Container>
  );
}

export default Contact;
