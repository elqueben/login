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
      <div
      style={{ 
        maxHeight: "100vh",
        padding: "15%",
        textAlign: "center"
        }}>
      <form onSubmit={handleLogOut}>
        <h1 className="title">Welcome to Your Account: <br /> {user && user.email}</h1>
        <p>Explore all the possibilities at your fingertips.</p>
      </form>
      <div className="sign-out-section">
        <button type="submit" className="btn btn-danger">
          Sign Out
        </button>
      </div>
    </div>
    </>
  );
};
