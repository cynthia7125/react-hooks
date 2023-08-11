import React from "react";
import ImageToggleOnMouseOver from "../src/imageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver 
        primaryImg="/static/speakers/bw/Pinky-And-The-Brain.jpg"
        secondaryImg="/static/speakers/Pinky-And-The-Brain.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/tomandjerry.jpg"
        secondaryImg="/static/speakers/tomandjerry.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
