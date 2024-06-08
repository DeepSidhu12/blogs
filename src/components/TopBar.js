import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => (
  <header className="top-bar">
    <div className="logo">My Blog</div>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default TopBar;
