import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import CreateHog from "./CreateHog";

import hogs from "../porkers_data";
// debugger;

// let hogs = [...hogs, hog]
// let savedHogs = [];
function App() {
  const [greased, setGreased] = useState(false);
  const [nameSorted, setNameSorted] = useState(false);
  const [weight, setWeight] = useState(false);
  const [hide, setHide] = useState(false);
  // const HOGS = [...hogs, ...savedHogs];
  const [HOGS, setHog] = useState([...hogs]);

  function megaSort(arrOfHogs, weightToggleEnable = false) {
    if (weightToggleEnable) {
      arrOfHogs.sort((a, b) => {
        // in place - sort
        if (a.weight < b.weight) {
          return -1;
        }
        if (a.weight > b.weight) {
          return 1;
        }

        // names must be equal
        return 0;
      });
      return arrOfHogs;
    } else {
      arrOfHogs.sort((a, b) => {
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
      return arrOfHogs;
    }
  }

  const regularHogs = HOGS;
  const greasedHogs = HOGS.filter((aHog) => aHog.greased);

  const amISortedGreased = nameSorted
    ? megaSort(greasedHogs, weight)
    : megaSort(greasedHogs, weight).sort((a, b) => 0.5 - Math.random());
  const amISortedNotGreased = nameSorted
    ? megaSort(regularHogs, weight)
    : megaSort(regularHogs, weight).sort((a, b) => 0.5 - Math.random());

  const handleAddHog = (hog) => {
    console.log("yoooooo", hog);
    // savedHogs.push(hog);
    setHog([hog, ...HOGS]);
    // 👇️ take parameter passed from Child component
    // setCount(current => current + num);
  };

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
          checked={nameSorted}
          onClick={() => {
            setNameSorted(!nameSorted);
          }}
        />{" "}
        name sorted!
      </p>

      <p>
        <input
          type="checkbox"
          checked={weight}
          onClick={() => {
            setWeight(!weight);
          }}
        />{" "}
        weight sorted!
      </p>

      <p>
        <input
          type="checkbox"
          checked={hide}
          onClick={() => {
            setHide(!hide);
          }}
        />{" "}
        HIDE THE HOGS!
      </p>
      <CreateHog handleAddHog={handleAddHog} />
      {hide ? null : (
        <Tile a_hog={greased ? amISortedGreased : amISortedNotGreased} />
      )}
    </div>
  );
}

export default App;
