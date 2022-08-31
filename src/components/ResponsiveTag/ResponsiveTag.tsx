import React, { useState, useEffect } from "react";
const ResponsiveTag = (props: any) => {
  const [windowDimenion, detectW] = useState({
    winWidth: window.innerWidth,
  });
  const detectSize = () => {
    detectW({
      winWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  let contentValue = props.children;
  const display = props.display;
  if (
    (display === "desktop" && windowDimenion.winWidth < 900) ||
    (display === "mobile" && windowDimenion.winWidth >= 900)
  ) {
    contentValue = "";
  }
  return <>{contentValue}</>;
};

export default ResponsiveTag;
