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
