import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom';

export  function ForgotPassword() {

    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const { resetPassword } = useUserAuth();
    const navigate = useNavigate()
    
    const handleReset = async (e) => {
        e.preventDefault()
        setError("");
        try {
            await resetPassword(email);
            navigate("/");
        } catch (err) {
            return (err.message);
        }
    }

  return (
    <>
        <div className="p-5">
        <h2 className="text-center mb-4">Reset Password</h2>
        {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleReset}>
          <p className='text-center'>type in the email to which the password was forgotten to, a link will be sent providing the user with a chance to reset their password</p>
          <div className="mb-3">
          {error && <div className="alert alert-danger">{error}</div>}
            <label className="form-label">Email</label>
            <input onChange={ (e) => setEmail(e.target.value) } type="email" className="form-control" required />
          </div>
          <button onClick={handleReset} type="submit" className="w-100 btn btn-primary">Submit</button>
          <p className='text-center pt-2'>return to <Link to="/">Sign-In Page</Link></p>
        </form>
      </div>
    </>
  )
}
