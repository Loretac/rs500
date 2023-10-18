import React, { useState } from "react";
import AlbumList from "./AlbumList";
import ButtonAppBar from "./ButtonAppBar";

// https://csvjson.com/csv2json
export function App() {
  var data = require("../data/rs500.json");
  var sortedData = data;

  const [sortBy, setSortBy] = useState("");

  // function handleSortChange() {}

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // console.log(age);
  };

  return (
    <>
      <ButtonAppBar handleSortChange={handleSortChange} sortBy={sortBy} />
      <AlbumList data={sortedData} />
    </>
  );
}
