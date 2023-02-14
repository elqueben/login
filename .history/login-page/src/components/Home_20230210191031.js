import React, { useState } from 'react';

const HomePage = () => {
  const [user, setUser] = useState("Guest");

  const handleLogout = () => {
    setUser("Guest");
  };

  return (
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
