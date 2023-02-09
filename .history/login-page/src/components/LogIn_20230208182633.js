import React from 'react'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'

export function LogIn() {
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
        <div>
          <GoogleButton className="g-btn w-100" type="dark" />
        </div>
        <div className="w-100 text-center mt-2">
          don't have an account? <Link to="/">Sign Up</Link>
        </div>
      </div>
    </>
  )
}
