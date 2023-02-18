import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/AuthContext';

export function Home() {

    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
      try {
        await logOut();
        navigate("/LogIn");
      } catch (err) {
        console.log(err.message)
      }

    }

  return (
    <>
      <div className='p-5 text-center'>
        <form></form>
        <h2>Welcome</h2>
        {user && user.email}
        <br />
        <button className="btn btn-primary" onClick={handleLogOut}>Logout</button>
      </div>
    </>
  );
};
