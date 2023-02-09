import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";


export function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
        <h2 className="text-center mb-4">Sign Up!</h2>
          <form>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" ref={emailRef} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  );
}