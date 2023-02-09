import React from 'react'

export default function LogIn() {
  return (
    <>
      <div className="p-5">
        <h2 className="text-center mb-4">Log In!</h2>
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
          
          <button type="submit" className="w-100 btn btn-primary">Submit</button>
        </form>
        <div className="w-100 text-center mt-2">
          don have an account? Log In
        </div>
      </div>
    </>
  )
}
