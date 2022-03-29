import React, { useState } from "react";

const Lights = () => {
  let defaultColor = <div style={{ backgroundColor: "pink" }}>red</div>;
  let clickedColor = <div style={{ backgroundColor: "red" }}>red</div>;

  const [color, setColor] = useState(defaultColor);

  return (
    <div>
      {color == defaultColor ? defaultColor : clickedColor}
      <div onClick={() => setColor({ clickedColor })}>test and retest</div>
    </div>
  );
};

export default Lights;
