import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray}) {

  const toyDisplay = toyArray.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} />
  })

  return (
    <div id="toy-collection">
      {toyDisplay}
    </div>
  );
}

export default ToyContainer;
