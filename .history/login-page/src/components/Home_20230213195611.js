import React, { useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';

export function Home() {

    const { user } = useUserAuth();

  return (
    <>
      <div className=''>
        <h2>Welcome</h2>
        <button className="btn btn-primary">Logout</button>
      </div>
    </>
  );
};
