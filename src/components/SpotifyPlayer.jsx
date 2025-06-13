import React from "react";

const SpotifyPlayer = () => {
    return (
        <div>
            <iframe
            src="https://open.spotify.com/embed/artist/2181g9f1ILOlw6ZHK8aZka?utm_source=generator&theme=1"
            width="50%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
            title="Spotify Player"
            style={{ border: "none", borderRadius: 0, backgroundColor: "transparent" }}
      ></iframe>

        </div>
    );
};

export default SpotifyPlayer; 