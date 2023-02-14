import React, { useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';

export function Home() {

    const { user } = useUserAuth();
    const { logOut } = useUserAuth();

    const handleLogOut = async () => {
      try {
        await logOut()
      } catch (err) {
        console.log(err.message)
      }

    }

  return (
    <>
      <div className='p-4 box mt-3 text-center'>
        <h2>Welcome</h2>
        {user }
        <button className="btn btn-primary" onClick={handleLogOut}>Logout</button>
      </div>
    </>
  );
};
