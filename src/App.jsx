import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home'; // Import Home component
import Login from './components/Login'; // Import Login component
import Photos from './components/Photos'; // Import Photos component
import Course from './components/Course'; // Import Course component
import Team from './components/Team'; // Import Team component
import Service from  './components/Service';
import Threed from './components/Threed';



const App = () => {
  const isLoggedIn = localStorage.getItem("loggedInUser");


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/photos" element={<Photos />} /> {/* Photos route */}
        <Route path="/course" element={<Course />} /> {/* Course route */}
        <Route path="/team" element={<Team />} /> {/* Team route */}
        <Route path="/service" element={<Service />} /> {/* Service route */}
        <Route path="/threed" element={<Threed />} /> {/* 3D route */}
        
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login />} /> {/* Home route with login check */}
        <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} /> {/* Login route with login check */}
        
      </Routes>
    </div>
  );
};

export default App;