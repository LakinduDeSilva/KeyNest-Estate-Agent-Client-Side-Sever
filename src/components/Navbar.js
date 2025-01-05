import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar component for navigation
 * @returns {JSX.Element} The rendered component
 */
const Navbar = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand link */}
        <Link className="navbar-brand fw-bold fs-2" to="/">KeyNest</Link> {/* Increase font size */}
        {/* Toggler button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navigation links */}
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="#">Properties</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="#">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;