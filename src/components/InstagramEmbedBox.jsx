import { useEffect } from "react";
import "./InstagramEmbedBox.css";

const InstagramEmbedBox = () => {
  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;

      // Append the script to the head (or body as fallback)
      const target = document.head || document.body;
      target.appendChild(script);
    }
  }, []);

  return (
    <div className="instagram-embed-box">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/C7JTb9Wu7z5/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbedBox;