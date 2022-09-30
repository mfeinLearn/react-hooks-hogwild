import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";
const HOGS = hogs;
// debugger;
function App() {
  const [greased, setGreased] = useState(true);

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
      {/* <Tile a_hog={!greased ? HOGS : newHOGS} /> */}
      <Tile
        a_hog={
          !greased
            ? HOGS.sort((a, b) => a.name - b.name)
            : newHOGS.sort((a, b) => a.name - b.name)
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
