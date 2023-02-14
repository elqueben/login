import React, { useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';

export function Home() {

    const { user } = useUserAuth();

  return (
    <>
      <div></div>
      <h1>Welcome</h1>
      <button className="btn btn-primary">Logout</button>
    </>
  );
};
