// old functional components - below

// App.js
import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import CreateHog from "./CreateHog";
import { useEffect } from "react";
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

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    console.log(`hog(s) added!`);
  }, [HOGS]);

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

//CreateHog.js
import React, { useState } from "react";

function CreateHog({ handleAddHog }) {
  const [value, setValue] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("hog created: ", value);
    handleAddHog(value);
  }

  function handleChange(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return (
    <form class="ui form" onSubmit={handleSubmit}>
      <label>Name:</label>
      {/* <input type="text" value={value} onChange={(e) => handleChange(e)} /> */}
      <input name="name" value={value.name} onChange={handleChange} />
      <br />
      <br />
      <label>specialty:</label>
      <input name="specialty" value={value.specialty} onChange={handleChange} />

      <br />
      <br />
      <label>weight:</label>
      <input name="weight" value={value.weight} onChange={handleChange} />
      <br />
      <br />
      <label>image:</label>
      <input name="image" value={value.image} onChange={handleChange} />
      <br />
      <br />
      <label>highest medal achieved:</label>
      <input
        name="highest medal achieved"
        value={value["highest medal achieved"]}
        onChange={handleChange}
      />
      <br />
      <br />
      <label>greased:</label>
      <input
        name="greased"
        type="radio"
        value={value.greased}
        onChange={handleChange}
      />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
export default CreateHog;


// Nav.js

import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;


//Tile.js

import React, { useState } from "react";

function Tile(props) {
  const hogss = props.a_hog;

  const [toggler, setToggler] = useState(false);

  //   let toggler = true;
  const details = (hog) => (
    <ul>
      {<li>{"Highest Medal Achieved: " + hog["highest medal achieved"]}</li>}
      <li>{"Specialty: " + hog.specialty}</li>
      <li>{"Weight : " + hog.weight}</li>
      <li>
        {"Greased: "}
        {hog.greased ? "True" : "False"}
      </li>
    </ul>
  );

  function handleClick() {
    // toggler = false;
    setToggler(() => !toggler);
  }

  const rHogs = hogss.map((hog) => {
    return (
      <div
        class="ui centered card"
        key={hog.name}
        onClick={() => handleClick()}
      >
        <img
          src={hog.image}
          alt={hog.name + " the hog"}
          width="290"
          height="290"
        ></img>
        <div class="content">
          <div class="header">{hog.name + " " + hog.weight}</div>
        </div>

        <br />
        <div>{toggler ? details(hog) : null}</div>
      </div>
    );
  });

  return rHogs;
}

export default Tile;
