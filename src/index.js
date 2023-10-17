import React from "react";
import ReactDOM from "react-dom/client";
import applemusicbtn from "./applemusicbtn.png"; // Tell webpack this JS file uses this image

// https://csvjson.com/csv2json

function App() {
  return <AlbumList />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function AlbumList() {
  var data = require("./rs500.json");
  console.log(data);

  return (
    <div>
      <ul>
        {data.map((row) => (
          <Album
            album={row.Album}
            artist={row.Artist}
            rank={row.Rank}
            image={row["Image Link"]}
            key={row.Rank}
            apple={row["Apple Music Link"]}
          />
        ))}
      </ul>
    </div>
  );
}

function Album({ album, artist, rank, image, apple }) {
  return (
    <div>
      <img
        src={
          image
            ? image
            : "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
        }
        width={100}
        alt="t"
      />
      {rank}, {album}, {artist}
      {apple && (
        <a href={apple}>
          <img src={applemusicbtn} width={100} alt="apple" />
        </a>
      )}
    </div>
  );
}
