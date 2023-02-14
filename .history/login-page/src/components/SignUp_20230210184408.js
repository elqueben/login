import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";


export function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate
    } catch (err) {
        setError(err.message); 
    }
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <div className="alert alert-danger">Error!</div>}
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" required />
          </div>
          <button onClick={handleSubmit} type="submit" className="w-100 btn btn-primary">Sign Up</button>
        </form>
        <div className="w-100 text-center mt-2">
          already have an account? <Link to="/">Log In</Link> 
        </div>
      </div>
    </>
  );
}
