// Home.jsx
import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      {/* Incorporate the Hero component */}
      <Hero />

      {/* Other Home page content can go here */}
      <div className="home-content">
        <h1>Welcome to the Home Page!</h1>
        <p>This is some additional content on your homepage.</p>
      </div>
    </div>
  );
};

export default Home;