import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 // CSS file jisme styling hoga

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Creative Abhishek</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/photos">Photos</Link></li>
          <li><Link to="/course">Course</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/threed">3D Model</Link></li>
          {loggedInUser ? (
            <>
              <li style={{ color: 'green' }}>{loggedInUser.email}</li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>

      <div className="home-content">
        <h1 className="home-heading">Welcome to Abhishek's World</h1>

        <form className="custom-search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search your skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>

        <p className="intro-text">
          Explore my creative journey in video editing, motion graphics, and design. 
          Search above to discover my tools, services, and skills.
        </p>
      </div>
    </div>
  );
};

export default Home;
