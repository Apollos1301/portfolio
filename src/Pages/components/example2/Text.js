import { animated, useSpring, config } from "react-spring";
import { useRef } from "react";
import useMeasure from "react-use-measure";
import { useState, useEffect } from "react";
import React from "react";

function Text({ letter, letterId, newL, onDelete, reset, letterlength }) {
  const spring = useSpring({
    loop: true,
    from: { x: 25 },
    to: { x: -2000 },
    config: { duration: 25000, mass: 100, tension: 28000, friction: 6000 },
    delay: 200,

    onStart: () => {
      if (letterId >= letterlength) {
        reset.current = true;
      }
      if (reset.current == false) {
        console.log(reset.current);
        //console.log(letterId);
        const test = setTimeout(() => {
          newL();
        });
      }
    },
  });
  return (
    <animated.p className="top_text_letter" style={spring}>
      {letter}
    </animated.p>
  );
}

export default Text;
