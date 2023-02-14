import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../contexts/AuthContext';
import GoogleButton from 'react-google-button'

export function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
        setError(err.message); 
    }
  }

  return (
    <>
      <div className="p-5" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Log In</h2>
        {error && <div className="alert alert-danger">{error}</div>}
          <form>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input onChange={ (e) => setEmail(e.target.value) } type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input onChange={ (e) => setPassword(e.target.value) } type="password" className="form-control" required />
          </div>
          <button otype="submit" className="w-100 btn btn-primary">Submit</button>
        </form>
        <div className='pt-3'>
          <GoogleButton className="g-btn w-100" type="dark" />
        </div>
        <div className="w-100 text-center mt-2">
          don't have an account? <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </>
  )
}
