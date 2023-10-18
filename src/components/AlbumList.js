import Album from "./Album";

export default function AlbumList() {
  var data = require("../data/rs500.json");
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
