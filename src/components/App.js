import React, { Component } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import CreateHog from "./CreateHog";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    greased: false,
    nameSorted: false,
    weight: false,
    hide: false,
    HOGS: [...hogs],
  };
  greasedHogs = this.state.HOGS.filter((aHog) => aHog.greased);

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <p>
          <input
            type="checkbox"
            checked={this.state.greased}
            onClick={() => {
              this.setState({
                greased: !this.state.greased,
              });
            }}
          />{" "}
          Greased!
        </p>

        <p>
          <input
            type="checkbox"
            checked={this.state.nameSorted}
            onClick={() => {
              this.setState({
                nameSorted: !this.state.nameSorted,
              });
            }}
          />{" "}
          name sorted!
        </p>

        <p>
          <input
            type="checkbox"
            checked={this.state.weight}
            onClick={() => {
              this.setState({
                weight: !this.state.weight,
              });
            }}
          />{" "}
          weight sorted!
        </p>

        <p>
          <input
            type="checkbox"
            checked={this.state.hide}
            onClick={() => {
              this.setState({
                hide: !this.state.hide,
              });
            }}
          />{" "}
          HIDE THE HOGS!
        </p>

        <CreateHog handleAddHog={this.handleAddHog} />
        {this.state.hide ? null : (
          <Tile
            a_hog={
              this.state.greased
                ? this.megaSort(this.greasedHogs, this.state.weight)
                : this.megaSort(this.state.HOGS, this.state.weight)
            }
          />
        )}
      </div>
    );
  }

  megaSort(arrOfHogs, weightToggleEnable = false) {
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

  handleAddHog = (hog) => {
    this.setState({
      HOGS: [hog, ...this.state.HOGS],
    });
  };
}

export default App;
