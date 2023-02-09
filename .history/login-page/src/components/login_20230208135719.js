import React from "react";
import { Form, Button, Card } from "react-bootstrap";


export function Login() {

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Pass</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}