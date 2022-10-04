//Tile.js

import React, { Component } from "react";

class Tile extends Component {
  state = {
    toggler: false,
  };

  details = (hog) => (
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

  handleClick() {
    this.setState({
      toggler: !this.state.toggler,
    });
  }

  render() {
    const rHogs = this.props.a_hog.map((hog) => {
      return (
        <div
          className="ui centered card"
          key={hog.name}
          onClick={() => this.handleClick()}
        >
          <img
            src={hog.image}
            alt={hog.name + " the hog"}
            width="290"
            height="290"
          ></img>
          <div className="content">
            <div className="header">{hog.name + " " + hog.weight}</div>
          </div>

          <br />
          <div>{this.state.toggler ? this.details(hog) : null}</div>
        </div>
      );
    });

    return rHogs;
  }
}

export default Tile;
