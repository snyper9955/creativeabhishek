import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert('User already exists');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please login.');
    setIsLogin(true);
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }, [isLogin]);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
            SignUp
          </button>
        </div>

        {isLogin ? (
          <div className='form'>
            <h2>Login Form</h2>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href="#">Forgot Password?</a>
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div className='form'>
            <h2>Signup Form</h2>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
          </div>
        )}
      </div>
    </div>
  );
}

