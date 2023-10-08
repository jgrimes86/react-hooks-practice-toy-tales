import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray, donateToy, likeToy }) {

  const toyDisplay = toyArray.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} donateToy={donateToy} likeToy={likeToy} />
  })

  return (
    <div id="toy-collection">
      {toyDisplay}
    </div>
  );
}

export default ToyContainer;
