import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray, donateToy}) {

  const toyDisplay = toyArray.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} donateToy={donateToy} />
  })

  return (
    <div id="toy-collection">
      {toyDisplay}
    </div>
  );
}

export default ToyContainer;
