import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/imageToggleOnScroll";

const ImageChangeOnScroll = () => {
  const [currentCartoon, setCurrentCartoon] = useState(0);
  const [mouseEventCount, setMouseEventCount] = useState(0);

  useEffect(() => {
    window.document.title = `MyCartoons: ${currentCartoon}`;
    console.log(`useEffect: setting title to ${currentCartoon}`);
  }, [currentCartoon ]);

  return (
    <div>
      <span>mouseEventCount: {mouseEventCount}</span>
      {[
        "bossbabby",
        "duck",
        "girlspy",
        "kimpossible",
        "mydesk",
        "tomandjerry",
        "Pinky-And-The-Brain",
      ].map((myCartoons) => {
        return (
          <div key={myCartoons}
            onMouseOver={() => {
              setCurrentCartoon(myCartoons);
              setMouseEventCount(mouseEventCount + 1);
              console.log(`onMouseOver:${myCartoons}`);
            }}>
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
