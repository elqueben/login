import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../contexts/AuthContext";


export function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signUp = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
    } catch (err) {
        setError(err.message); 
    }
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <div className="alert alert-danger">Error!</div>}
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email"></Form.Control>
          </Form.Group>
        </Form>
        <div className="w-100 text-center mt-2">
          already have an account? <Link to="/">Log In</Link> 
        </div>
      </div>
    </>
  );
}
