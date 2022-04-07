import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__menu container">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/trending" className="navbar__link">Trending</Link>
      </div>
    </nav>
  )
}
