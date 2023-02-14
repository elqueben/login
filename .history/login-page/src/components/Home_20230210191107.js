import React, { useState } from 'react';

export function Home() {
  const [user, setUser] = useState("Guest");

  const handleLogout = () => {
    setUser("Guest");
  };

  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={handleLogout} className>Logout</button>
    </div>
  );
};
