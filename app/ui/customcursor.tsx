"use client"

import { useEffect } from "react";

const CustomCursorAnimation = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    const hoverAble = document.getElementsByClassName("hoverable");

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.classList.add("hidden");
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.classList.remove("hidden");
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    for (let i = 0; i < hoverAble.length; i++) {
      hoverAble[i].addEventListener('mouseenter', handleMouseEnter);
      hoverAble[i].addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);

      for (let i = 0; i < hoverAble.length; i++) {
        hoverAble[i].removeEventListener('mouseenter', handleMouseEnter);
        hoverAble[i].removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return <div id="custom-cursor" className="absolute top-0 left-0 pointer-events-none"></div>;
};

export default CustomCursorAnimation;
