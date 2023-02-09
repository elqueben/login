import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";


export function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  return (
    <>
      <div className="p-5" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Sign Up!</h2>
          <form>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" ref={emailRef} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={passwordRef} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password Confirmation</label>
            <input type="password" className="form-control" ref={passwordConfirmationRef} required />
          </div>
          <button type="submit" className="w-100 btn btn-primary">Submit</button>
        </form>
        <div className="w-100 text-center mt-2">
          already have an account? Log In
        </div>
      </div>
    </>
  );
}