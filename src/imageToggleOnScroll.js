import React, { useEffect, useRef, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };
// Setting the below line to truw also does when line 14 does, why?
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return <img src={
    // isLoading ? "data:image/gif" 
    inView ? secondaryImg : primaryImg} 
    alt="" ref={imageRef} />;
};

export default ImageTogglerOnScroll;
