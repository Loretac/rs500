import applemusicbtn from "../applemusicbtn.png"; // Tell webpack this JS file uses this image

export default function Album({ album, artist, rank, image, apple, year }) {
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
