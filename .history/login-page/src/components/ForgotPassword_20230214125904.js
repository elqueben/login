import React from 'react'

export  function ForgotPassword() {
  return (
    <>
        <div className="p-5">
        <h2 className="text-center mb-4">Reset Password</h2>
          <form>
          <p>type in the email to which the password was forgotten to, the recipie</p>
          <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <button type="submit" className="w-100 btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}
