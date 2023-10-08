import React, { useState } from "react";

const formStart = {
  name: "",
  image: "",
}

function ToyForm({addNewToy}) {
  const [formData, setFormData] = useState(formStart)

  function handleSubmit(event) {
    event.preventDefault();
    addNewToy(formData)
    setFormData(formStart)
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className="container" onSubmit={handleSubmit}>
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
