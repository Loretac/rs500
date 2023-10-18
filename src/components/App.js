import React, { useState } from "react";
import AlbumList from "./AlbumList";
import ButtonAppBar from "./ButtonAppBar";

// https://csvjson.com/csv2json
export function App() {
  var data = require("../data/rs500.json");
  // var sortedData = data;

  const [sortBy, setSortBy] = useState("");

  const [sortedData, setSortedData] = useState(data);

  // function handleSortChange() {}

  const handleSortChange = (event) => {
    setSortBy(event.target.value);

    switch (event.target.value) {
      case "year-d":
        setSortedData((sortedData) =>
          sortedData.sort((a, b) => b.Year - a.Year)
        );
        break;
      case "year-a":
        setSortedData((sortedData) =>
          sortedData.sort((a, b) => a.Year - b.Year)
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
        setSortedData((sortedData) => sortedData);
    }
  };

  return (
    <>
      <ButtonAppBar handleSortChange={handleSortChange} sortBy={sortBy} />
      <AlbumList data={sortedData} />
    </>
  );
}
