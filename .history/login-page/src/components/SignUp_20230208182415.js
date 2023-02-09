import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import GoogleButton from "react-google-button"

export function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefafualt()

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      signUp(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to create an account")
    }

    signUp(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Sign Up!</h2>
        {error && <Alert varient="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
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
          <button type="submit" disabled={loading} className="w-100 btn btn-primary">Submit</button>
        </form>
        <div>
          <GoogleButton className="g-btn" type />
        </div>
        <div className="w-100 text-center mt-2">
          already have an account? <Link to="/LogIn">Log In</Link> 
        </div>
      </div>
    </>
  );
}