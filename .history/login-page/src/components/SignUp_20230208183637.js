import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import GoogleButton from "react-google-button"

export function SignUp() {


  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Sign Up!</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password Confirmation</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" disabled={loading} className="w-100 btn btn-primary">Submit</button>
        </form>
        <div className="w-100 text-center mt-2">
          already have an account? <Link to="/LogIn">Log In</Link> 
        </div>
      </div>
    </>
  );
}