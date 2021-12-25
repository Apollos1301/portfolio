import ski1 from "../pictures/ski1.jpg";
import ski2 from "../pictures/ski2.jpg";
import ski3 from "../pictures/ski3.jpg";
import ski4 from "../pictures/ski4.jpg";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
const Ref1_mid = () => {
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
    <div className="ref1_mid_backg">
      <div className="ref1_mid">
        <div className="ref1_mid_images">
          <img className="ref1_mid_img1" src={ski1} alt="" srcset="" />
          <img className="ref1_mid_img2" src={ski2} alt="" srcset="" />
          <img className="ref1_mid_img3" src={ski3} alt="" srcset="" />
          <img className="ref1_mid_img4" src={ski4} alt="" srcset="" />
        </div>
        <div className="ref1_mid_right">
          <animated.button
            style={styles}
            className="ref1_mid_btn"
            onMouseOver={btn_hover}
            onMouseOut={() => {
              api.stop();
              api.start({ scale: 1 });
            }}
          >
            About {">>>"}{" "}
          </animated.button>
        </div>
      </div>
    </div>
  );
};

export default Ref1_mid;
