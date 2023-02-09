import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup]

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Sign Up</h2>
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
          <button type="submit" className="w-100 btn btn-primary">Submit</button>
        </form>
        <div className="w-100 text-center mt-2">
          already have an account? <Link to="/">Log In</Link> 
        </div>
      </div>
    </>
  );
}