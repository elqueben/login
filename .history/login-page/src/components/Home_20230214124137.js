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
      <div className="text-center" 
      style={{ 
        maxHeight: "100vh",
        padding: "25%", }}>
      <div>
        <h1 className="title">Welcome to Your Account: {user && user.email}</h1>
        <p className="subtitle">Explore all the possibilities at your fingertips.</p>
        <div className="container">
          <button className="btn btn-success">
            Explore Dashboard
          </button>
        </div>
      </div>
      <div className="sign-out-section">
        <button className="btn btn-danger">
          Sign Out
        </button>
      </div>
    </div>
    </>
  );
};
