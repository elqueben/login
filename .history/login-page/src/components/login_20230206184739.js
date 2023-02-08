import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary"><Link to="/Welcome">Submit</Link></button>
      </form>
    </div>
  );
}