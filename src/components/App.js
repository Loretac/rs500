import React, { useState } from "react";
import AlbumList from "./AlbumList";
import ButtonAppBar from "./ButtonAppBar";

// https://csvjson.com/csv2json

export function App() {
  var data = require("../data/rs500.json");
  data = data.sort((a, b) => a.Rank - b.Rank);

  const [sortBy, setSortBy] = useState("rank-d");
  const [sortedData, setSortedData] = useState(data);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);

    switch (event.target.value) {
      case "year-d":
        setSortedData((sortedData) =>
          sortedData.sort((a, b) => b.Year - a.Year || a.Rank - b.Rank)
        );
        break;
      case "year-a":
        setSortedData((sortedData) =>
          sortedData.sort((a, b) => a.Year - b.Year || a.Rank - b.Rank)
        );
        break;
      case "rank-a":
        setSortedData((sortedData) =>
          sortedData.sort((a, b) => b.Rank - a.Rank)
        );
        break;
      case "rank-d":
        setSortedData((sortedData) =>
          sortedData.sort((a, b) => a.Rank - b.Rank)
        );
        break;
      default:
        setSortedData((sortedData) =>
          sortedData.sort((a, b) => a.Rank - b.Rank)
        );
    }
  };

  return (
    <>
      <ButtonAppBar handleSortChange={handleSortChange} sortBy={sortBy} />
      <AlbumList data={sortedData} />
    </>
  );
}
