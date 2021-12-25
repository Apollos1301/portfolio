import { useSpring, animated } from "react-spring";
import { useState } from "react";

const Ref1_top = () => {
  const [toggle, setToggle] = useState(false);
  const [styles, api] = useSpring(() => ({ scale: 1 }));

  // Update spring with new props
  //api.start({ opacity: toggle ? 1 : 0 });
  // Stop animation
  //api.stop();
  const btn_hover = () => {
    api.stop();
    api.start({ scale: 1.1 });
  };
  return (
    <div className="ref1_top_backg">
      <div className="ref1_top">
        <h1>
          Skiing<span className="ref1_span1">!</span>
        </h1>
        <h3>Contact us for the best skiing experience</h3>
        <animated.button
          style={styles}
          className="ref1_btn_top"
          onMouseOver={btn_hover}
          onMouseOut={() => {
            api.stop();
            api.start({ scale: 1 });
          }}
        >
          Contact us! <span className="ref1_span2"> {">>>"} </span>
        </animated.button>
      </div>
    </div>
  );
};

export default Ref1_top;
