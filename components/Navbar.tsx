import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">TRUSTGRAPH_</div>
        <div className="nav-links">
          <a href="#how-it-works">HOW IT WORKS</a>
          <a href="#features">FEATURES</a>
          <a href="#benefits">BENEFITS</a>
          <button className="login-button">LOGIN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 