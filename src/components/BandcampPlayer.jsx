import React from "react";
import "./BandcampPlayer.css"; 

const BandcampPlayer = () => {
    return (
        <div className="bandcamp-player">
           <iframe
        style={{ border: '0', width: '100%', height: '406px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2885874966/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
        seamless
        title="Bandcamp Album Player"
      >
        <a href="https://yumiyacchi.bandcamp.com/album/not-quite-a-goodbye">
          (not quite a) goodbye by yumiyacchi
        </a>
      </iframe>


        </div>
    );
};

export default BandcampPlayer;