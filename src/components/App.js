import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";
const HOGS = hogs;
// debugger;
function App() {
  const [greased, setGreased] = useState(true);
  const [sorted, setSorted] = useState(true);
  //   console.log(hogs);
  const newHOGS = HOGS.filter((aHog) => aHog.greased);
  console.log("filtered hogs - greased: ", newHOGS);
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

      {/* <Tile a_hog={!greased ? HOGS : newHOGS} /> */}
      <Tile
        a_hog={
          !greased
            ? HOGS.sort((a, b) => {
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
              })
            : newHOGS.sort((a, b) => {
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
              })
        }
      />
    </div>
  );
}

export default App;

// employees.sort((a, b) => {
//   return a.age - b.age;
// });

// HOGS.sort(a,b)=> {a.name - b.name}

// {/* <Tile a_hog={!greased ? HOGS : newHOGS} /> */}
// <Tile
//   a_hog={
//     !greased
//       ? HOGS.sort((a, b) => a.name - b.name)
//       : newHOGS.sort((a, b) => a.name - b.name)
//   }
// />
