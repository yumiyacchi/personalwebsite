
import React from "react";
import InstagramEmbedBox from "../components/InstagramEmbedBox";
import "../components/Events.css"

const Events = () => {
  console.log("Events page rendered!");
  return (

    <div className="events-page">
      <h2>Próximos Eventos</h2>
      <div className="content-container">
        <div className="main-content">
          <h3>Upcoming Events</h3>
          <ul>
            <li>
              <a
                href="https://ticketlink.com/event1"
                target="_blank"
                rel="noopener noreferrer"
              >
                July 10, 2025 – New York
              </a>
            </li>
            <li>
              <a
                href="https://ticketlink.com/event2"
                target="_blank"
                rel="noopener noreferrer"
              >
                August 5, 2025 – Los Angeles
              </a>
            </li>
            <li>
              <a
                href="https://ticketlink.com/event3"
                target="_blank"
                rel="noopener noreferrer"
              >
                September 15, 2025 – Chicago
              </a>
            </li>
          </ul>
        </div>
        <div className="embed-container">
          <InstagramEmbedBox />
        </div>
      </div>
    </div>
  );
};

export default Events;