import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";

// debugger;
function App() {
  const HOGS = hogs;
  const [greased, setGreased] = useState(true);
  const [sorted, setSorted] = useState(true);

  const sortedGreasedArr = HOGS.filter((aHog) => aHog.greased).sort((a, b) => {
    // in place - sort
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  const notGreased = HOGS.sort((a, b) => {
    // in place - sort
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  const amISortedGreased = sorted
    ? sortedGreasedArr
    : sortedGreasedArr.sort((a, b) => 0.5 - Math.random());

  const amISortedNotGreased = sorted
    ? notGreased
    : notGreased.sort((a, b) => 0.5 - Math.random());
  return (
    <div className="App">
      <Nav />
      <p>
        <input
          type="checkbox"
          checked={greased}
          onClick={() => {
            setGreased(!greased);
          }}
        />{" "}
        Greased!
      </p>

      <p>
        <input
          type="checkbox"
          checked={sorted}
          onClick={() => {
            setSorted(!sorted);
          }}
        />{" "}
        Sorted!
      </p>

      <Tile a_hog={greased ? amISortedGreased : amISortedNotGreased} />
    </div>
  );
}

export default App;
