
import React, { useState } from "react";
import "./Login.css";
import googleLogo from "./assets/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="F14">
      <div className="F13">
        <h2>Login to your Account</h2>
        <p>See what is going on with your business</p>
        <button className="google-btn">
        <img 
          src={googleLogo} 
          alt="Google logo" 
          className="google-logo"
        />Continue with Google
      </button>

      </div>
        <p className="divider">or Sign in with Email</p>
      <div className="F12">
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="EatOnTime@abc.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
