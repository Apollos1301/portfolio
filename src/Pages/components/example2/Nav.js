import { useState } from "react";
import { animated, useSprings } from "react-spring";
import menue from "../pictures/menue.svg";
import question from "../pictures/questionmark.svg";
import user from "../pictures/user.svg";
import cart from "../pictures/shopping_cart.svg";

function Nav() {
    const [isActive, setisActive] = useState(false);
    const [start, setStart] = useState(false);
    const data = [
      {
        id: 1,
        from: { x: isActive ? 50 : 0, opacity: isActive ? 0 : 1 },
        to: { x: isActive ? 0 : 50, opacity: isActive ? 1 : 0 },
        config: { duration: 300 },
      },
      {
        id: 2,
        from: { x: isActive ? 60 : 0, opacity: isActive ? 0 : 1 },
        to: { x: isActive ? 0 : 60, opacity: isActive ? 1 : 0 },
        config: { duration: 400 },
      },
      {
        id: 3,
        from: { x: isActive ? 70 : 0, opacity: isActive ? 0 : 1 },
        to: { x: isActive ? 0 : 70, opacity: isActive ? 1 : 0 },
        config: { duration: 500 },
      },
    ];
    const drop = useSprings(
      3,
      data.map(({ id, ...config }) => config)
    );
    
  return (
    <nav
      className="nav2"
      onMouseOver={() => {
        setisActive(true);
        setStart(true);
      }}
      onMouseOut={() => setisActive(false)}
      onClick={() => {
        setisActive(!isActive);
        setStart(true);
      }}
    >
      <div className="nav2_links">
        <animated.img
          style={start ? drop[0] : { opacity: 0 }}
          src={question}
          alt="FAQ"
        />
        <animated.img
          style={start ? drop[1] : { opacity: 0 }}
          src={user}
          alt="Profile"
        />
        <animated.img
          style={start ? drop[2] : { opacity: 0 }}
          src={cart}
          alt="Shopping"
        />
      </div>
      <img src={menue} alt="Menue" />
    </nav>
  );
}

export default Nav;
