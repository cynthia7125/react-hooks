import React from 'react';
import ImageToggleOnMouseOver from "../src/imageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver 
        primaryImg="/static/cartoons/bw/Pinky-And-The-Brain.jpg"
        secondaryImg="/static/cartoons/Pinky-And-The-Brain.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/cartoons/bw/tomandjerry.jpg"
        secondaryImg="/static/cartoons/tomandjerry.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
