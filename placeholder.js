import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import CreateHog from "./CreateHog";

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(false);
  const [nameSorted, setNameSorted] = useState(false);
  const [weight, setWeight] = useState(false);
  const [hide, setHide] = useState(false);
  const [HOGS, setHog] = useState([...hogs]);
  const greasedHogs = HOGS.filter((aHog) => aHog.greased);

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

  const handleAddHog = (hog) => {
    setHog([hog, ...HOGS]);
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
        <Tile
          a_hog={
            greased ? megaSort(greasedHogs, weight) : megaSort(HOGS, weight)
          }
        />
      )}
    </div>
  );
}

export default App;
