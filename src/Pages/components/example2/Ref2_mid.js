import obj1 from "../pictures/boots1.jpg";
import obj2 from "../pictures/boots2.jpg";
import obj3 from "../pictures/boots3.jpg";
import obj4 from "../pictures/boots4.jpg";
import obj5 from "../pictures/boots5.jpg";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
function Ref2_mid() {
  const [toggle, setToggle] = useState(false);
  const [styles, api] = useSpring(() => ({ scale: 1 }));
  const btn_hover = () => {
    api.stop();
    api.start({ scale: 1.1 });
  };
  return (
    <div className="ref2_mid">
      <div className="ref2_mid_new_collection">
        <div className="ref2_mid_new_collection_header">
          <h1>New Collection</h1>
          <animated.h3
            style={styles}
            onMouseOver={btn_hover}
            onMouseOut={() => {
              api.stop();
              api.start({ scale: 1 });
            }}
          >
            {">>>"} Go to Collection
          </animated.h3>
        </div>
        <div className="ref2_mid_new_collection_objects">
          <div className="new_collection_obj obj1">
            <img src={obj1} alt="" />
            <div className="new_collection_obj_info">
              <h3>Boots1</h3>
              <h5>122.99$</h5>
            </div>
          </div>
          <div className="new_collection_obj obj2">
            <img src={obj2} alt="" />
            <div className="new_collection_obj_info">
              <h3>Boots2</h3>
              <h5>80.99$</h5>
            </div>
          </div>
          <div className="new_collection_obj obj3">
            <img src={obj3} alt="" />
            <div className="new_collection_obj_info">
              <h3>Boots3</h3>
              <h5>180.99$</h5>
            </div>
          </div>
          <div className="new_collection_obj obj4">
            <img src={obj4} alt="" />
            <div className="new_collection_obj_info">
              <h3>Boots4</h3>
              <h5>50.99$</h5>
            </div>
          </div>
          <div className="new_collection_obj obj5">
            <img src={obj5} alt="" />
            <div className="new_collection_obj_info">
              <h3>Boots5</h3>
              <h5>210.99$</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ref2_mid;
