import React from 'react';

/**
 * HomePage component for displaying the home page content
 * @param {Function} onGetStarted - Function to handle the "Get Started" button click
 * @returns {JSX.Element} The rendered component
 */
const HomePage = ({ onGetStarted }) => {
  return (
    <div className="home-page text-center">
      <div className="home-page-content">
        {/* Main heading */}
        <h1>Welcome to KeyNest</h1>
        {/* Subheading */}
        <p>Your trusted partner in finding the perfect property.</p>
        {/* "Get Started" button */}
        <button className="btn btn-primary" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;