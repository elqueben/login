import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 
import GoogleButton from 'react-google-button'

export function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Log In</h2>
          <form>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="w-100 btn btn-primary">Submit</button>
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
