import React from "react";

function PercentageContainer({ percentage, type}) {
  return (
    <div>
      <h4 className="text-3xl font-extralight">{percentage}%</h4>
      <p>{type}</p>
    </div>
  );
}

export default PercentageContainer;
