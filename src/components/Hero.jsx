import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-top">
        <div className="youtube-container">
          <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="intro-text">
          <p>
            Welcome! I’m Gabriel, a passionate DJ sharing my unique energy and eclectic
            sounds. Check out my DJ sets on YouTube and explore my Spotify playlist below for
            the latest vibes.
          </p>
        </div>
      </div>

      <div className="hero-bottom">
        <iframe
          src="https://open.spotify.com/embed/artist/2181g9f1ILOlw6ZHK8aZka?utm_source=generator&theme=0"
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;