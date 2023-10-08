import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([])

  const toyDatabase = "http://localhost:3001/toys"

  useEffect(fetchToys, [])

  function fetchToys() {
    fetch(toyDatabase)
    .then(response => response.json())
    .then(data => setToyArray(data))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} />
    </>
  );
}

export default App;
