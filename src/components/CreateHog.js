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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        {/* <input type="text" value={value} onChange={(e) => handleChange(e)} /> */}
        <input name="name" value={value.name} onChange={handleChange} />
        <br />
        specialty:
        <input
          name="specialty"
          value={value.specialty}
          onChange={handleChange}
        />
        <br />
        greased:
        <input
          name="greased"
          type="radio"
          value={value.greased}
          onChange={handleChange}
        />
        <br />
        weight:
        <input name="weight" value={value.weight} onChange={handleChange} />
        <br />
        image:
        <input name="image" value={value.image} onChange={handleChange} />
        <br />
        highest medal achieved:
        <input
          name="highest medal achieved"
          value={value["highest medal achieved"]}
          onChange={handleChange}
        />
        <br />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default CreateHog;
