import React from 'react'

export function LogIn() {
  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Log In!</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control"  required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          
          <button type="submit" className="w-100 btn btn-primary">Submit</button>
        </form>
        <div className="w-100 text-center mt-2">
          don't have an account? Sign Up
        </div>
      </div>
    </>
  )
}
