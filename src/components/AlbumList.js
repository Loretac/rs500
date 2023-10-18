import Album from "./Album";

export default function AlbumList({ data }) {
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
