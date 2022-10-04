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

////////////////////////

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Goal isGoal={false} />);

// ) : (
//     <ul>
//       {<li>{hog["highest medal achieved"]}</li>}
//       <li>{hog.specialty}</li>
//       <li>{hog.weight}</li>
//       <li>{hog.greased ? "True" : "False"}</li>
//     </ul>
//   );
// });
