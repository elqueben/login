import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp } = useAuth()
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefafualt()

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords Do Not Match")
    }

    try {
      await signUp(emailRef.current.value, passwordRef.current.value)
    } catch {
      
    }

    signUp(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <>
      <div className="p-5">
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