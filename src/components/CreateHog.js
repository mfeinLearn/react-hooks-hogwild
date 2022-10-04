import React, { Component } from "react";

// function CreateHog({ handleAddHog }) {
class CreateHog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = {
      name: this.state.name,
      specialty: this.state.specialty,
      greased: this.state.greased,
      weight: this.state.weight,
      "highest medal achieved": this.state["highest medal achieved"],
      image: this.state.image,
    };
    this.props.handleAddHog(formData);
    this.setState({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: "",
    });
  }

  handleChange(event) {
    console.log("heyyyyyy");
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form className="ui form" onSubmit={(event) => this.handleSubmit(event)}>
        <label>Name:</label>
        {/* <input type="text" value={value} onChange={(e) => handleChange(e)} /> */}
        <input
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <label>specialty:</label>
        <input
          name="specialty"
          value={this.state.specialty}
          onChange={(e) => this.handleChange(e)}
        />

        <br />
        <br />
        <label>weight:</label>
        <input
          name="weight"
          value={this.state.weight}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <br />
        <label>image:</label>
        <input
          name="image"
          value={this.state.image}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <br />
        <label>highest medal achieved:</label>
        <input
          name="highest medal achieved"
          value={this.state["highest medal achieved"]}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <br />
        <label>greased:</label>
        <input
          name="greased"
          type="radio"
          value={this.state.greased}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default CreateHog;
