import React from "react";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      console.log("ScrollY:", window.scrollY);
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const classes = isVisible ? "scroll-to-top show" : "scroll-to-top";

  return <BsFillArrowUpCircleFill className={classes} onClick={scrollToTop} />;
}
