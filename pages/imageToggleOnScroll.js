import React from "react";
import ImageToggleOnScroll from "../src/imageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {["bossbabby", "duck", "girlspy", "kimpossible", "mydesk", "tomandjerry", "Pinky-And-The-Brain"].map((myCartoons) => {
        return (
          <div key={myCartoons}>
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/${myCartoons}.jpg`}
              secondaryImg={`/static/speakers/${myCartoons}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
