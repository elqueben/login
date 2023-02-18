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
      <div className="home-container">
      <div className="welcome-section">
        <h1 className="title">Welcome to Your Account: {user && user.email}</h1>
        <p className="subtitle">Explore all the possibilities at your fingertips.</p>
        <div className="cta-container">
          <button to="/dashboard" className="cta-button">
            Explore Dashboard
          </button>
        </div>
      </div>
      <div className="sign-out-section">
        <button to="/sign-out" className="sign-out-button">
          Sign Out
        </Link>
      </div>
    </div>
    </>
  );
};