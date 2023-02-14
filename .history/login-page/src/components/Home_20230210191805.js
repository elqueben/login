import React, { useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';

export function Home() {

    const { user } = useUserAuth();
    console.log

  return (
    <div>
      <h1>Welcome</h1>
      <button className="btn btn-primary">Logout</button>
    </div>
  );
};
