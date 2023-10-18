import React from "react";
import ReactDOM from "react-dom/client";
import applemusicbtn from "./applemusicbtn.png"; // Tell webpack this JS file uses this image
import "./styles.css";

// https://csvjson.com/csv2json

function App() {
  return <AlbumList />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function AlbumList() {
  var data = require("./rs500.json");
  // console.log(data);

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
            year={row.Year}
            apple={row["Apple Music Link"]}
          />
        ))}
      </ul>
    </div>
  );
}

function Album({ album, artist, rank, image, apple, year }) {
  return (
    <li className="row">
      <img
        className="album-cover"
        src={
          image
            ? image
            : "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
        }
        alt="t"
      />
      <div className="container">
        <div className="rank">{rank}</div>
        <div className="album-title">{album}</div>
        <div className="artist">
          {artist} - {year}
        </div>
        {apple && (
          <a className="apple-music-link" href={apple}>
            <img className="apple-music-btn" src={applemusicbtn} alt="apple" />
          </a>
        )}
      </div>
    </li>
  );
}
