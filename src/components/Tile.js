import React, { useState } from "react";

function Tile(props) {
  const hogss = props.a_hog;
  console.log("yooooooo", props.a_hog);

  const [toggler, setToggler] = useState(false);

  //   let toggler = true;
  const details = (hog) => (
    <ul>
      {<li>{hog["highest medal achieved"]}</li>}
      <li>{hog.specialty}</li>
      <li>{hog.weight}</li>
      <li>{hog.greased ? "True" : "False"}</li>
    </ul>
  );

  function handleClick() {
    // toggler = false;
    setToggler(() => !toggler);
    console.log("this is:");
  }

  const rHogs = hogss.map((hog) => {
    return (
      <ul key={hog.name} onClick={() => handleClick()}>
        <li>{hog.name}</li>
        <li>{hog.image}</li>
        <br />
        <li>{toggler ? details(hog) : null}</li>
      </ul>
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
