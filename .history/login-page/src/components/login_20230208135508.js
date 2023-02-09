import React from "react";
import { Form, Button, Card } from "react-bootstrap";


export function Login() {

  return (
    <>
      <Card>
        <h2>Sign Up</h2>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required></Form.Control />
          </Form.Group>
        </Form>
      </Card>
    </>
  );
}