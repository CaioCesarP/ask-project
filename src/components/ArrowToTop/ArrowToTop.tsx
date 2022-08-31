import { useEffect, useState } from "react";
import "./style.css";

const arrowToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleClickGoToTheTopOfThePage = () => {
    document.documentElement.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="arrowToTop"
      style={{
        display: scrollPosition >= 300 ? "flex" : "none",
      }}
      onClick={() => handleClickGoToTheTopOfThePage()}
    >
      <span className="material-icons">keyboard_arrow_up</span>
    </div>
  );
};

export default arrowToTop;
