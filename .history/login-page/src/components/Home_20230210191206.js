import React, { useState } from 'react';
import { useUserAuth } from '../contexts/AuthContext';

export function Home() {
  set

  const handleLogout = () => {
    setUser("Guest");
  };

  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>
  );
};
