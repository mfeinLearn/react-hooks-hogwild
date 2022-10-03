import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";
// debugger;
function App() {
  const HOGS = hogs;
  const [greased, setGreased] = useState(true);
  const [nameSorted, setNameSorted] = useState(true);
  const [weight, setWeight] = useState(true);

  ////////////////////////////
  /*SORTING BY NAME BEGINNIG*/
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

  const amISortedGreased = nameSorted
    ? sortedGreasedArr
    : sortedGreasedArr.sort((a, b) => 0.5 - Math.random());

  const amISortedNotGreased = nameSorted
    ? notGreased
    : notGreased.sort((a, b) => 0.5 - Math.random());

  /*SORTING BY NAME END*/
  ///////////////////////

  ////////////////////////////
  /*SORTING BY WEIGHT BEGINNIG*/

  const sortByWeight = HOGS.sort((a, b) => {
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

  const amISortByWeight = nameSorted
    ? sortByWeight
    : sortByWeight.sort((a, b) => 0.5 - Math.random());

  /*SORTING BY WEIGHT END*/
  ///////////////////////

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
            setWeight(!nameSorted);
          }}
        />{" "}
        name sorted!
      </p>

      <Tile a_hog={greased ? amISortedGreased : amISortedNotGreased} />
    </div>
  );
}

export default App;

/////////////////
import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";

import hogs from "../porkers_data";
// debugger;
function App() {
  const HOGS = hogs;
  const [greased, setGreased] = useState(true);
  const [nameSorted, setNameSorted] = useState(true);
  const [weight, setWeight] = useState(true);

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
    }
    return arrOfHogs;
  }

  // NORMAL SORTING ALL HOGS
  const regularHogs = HOGS;
  const normalHogs = megaSort(regularHogs);

  // NORMAL FILTERING ALL HOGS
  const greasedHogs = HOGS.filter((aHog) => aHog.greased);

  ////////////////////////////
  /*SORTING BY NAME BEGINNIG*/
  // --- const greasedArr = HOGS.filter((aHog) => aHog.greased);
  const sortedGreasedArr = megaSort(greasedHogs);

  const amISortedGreased = nameSorted
    ? sortedGreasedArr
    : sortedGreasedArr.sort((a, b) => 0.5 - Math.random());

  const amISortedNotGreased = nameSorted
    ? normalHogs
    : normalHogs.sort((a, b) => 0.5 - Math.random());

  /*SORTING BY NAME END*/
  ///////////////////////

  ////////////////////////////
  /*SORTING BY WEIGHT BEGINNIG*/

  megaSort(greasedHogs, weight);

  /*SORTING BY WEIGHT END*/
  ///////////////////////

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

      <Tile a_hog={greased ? amISortedGreased : amISortedNotGreased} />
    </div>
  );
}

export default App;

//////

import React, { useState } from "react";

function CreateHog() {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  function handleChange(event) {
    console.log(event);
    setValue(event.target.value);
  }

  console.log("this is state: ", value);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default CreateHog;


////////////// at 557 pm

import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import CreateHog from "./CreateHog";

import hogs from "../porkers_data";
// debugger;

// let hogs = [...hogs, hog]

function App() {
  const HOGS = hogs;
  const [greased, setGreased] = useState(false);
  const [nameSorted, setNameSorted] = useState(false);
  const [weight, setWeight] = useState(false);
  const [hide, setHide] = useState(false);
  const [hogss, setHog] = useState([...HOGS]);
  console.log("adding hog: ", hogss);
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
    setHog([...hogs, hog]);
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