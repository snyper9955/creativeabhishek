import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Log in to your account</p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
