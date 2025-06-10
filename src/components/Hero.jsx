import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-top">
        <div className="youtube-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SjVFR2R0y7s?si=S1dCn6RhB2MBcvvr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="intro-text">
          <p>
            yumiyacchi es un DJ chileno dedicado al los ritmos rápidos con un toque
            geek, enfocado en el anime y la cultura japonesa. 
            Empezando su carrera el año 2016 tras varios proyectos previos, yumiyacchi
            se alza como uno de los productores líderes en la música HDM. 
            Consolidándose en el mercado japonés con el lanzamiento en 2019 del track 
            "where are u now" en el videojuego de ritmo SEVEN's CODE, además de diversos
            lanzamientos en otros mercados como Asia, Europa y USA, yumiyacchi se 
            pone a la cabeza de la música "geek" en Chile, siendo elegido para tocar
            en diferentes fiestas dedicadas al mercado geek incluyendo el kickoff
            de Super Japan Expo 2023, y Minami Convention 2023. 
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