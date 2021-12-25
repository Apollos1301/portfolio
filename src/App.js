import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Example_1 from "./Pages/Example_1";
import Example_2 from "./Pages/Example_2";
import Example_3 from "./Pages/Example_3";
import page1 from "./Pages/components/pictures/page1.png";
import page2 from "./Pages/components/pictures/page2.png";
import page3 from "./Pages/components/pictures/page3.png";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/example1" element={<Example_1 />} />
        <Route path="/example2" element={<Example_2 />} />
        <Route path="/example3" element={<Example_3 />} />
      </Routes>
    </Router>
  );
}

const Main = () => (
  <div className="Main">
    <div className="btns">
      <Link className="a_button" to="/example1">
        <img src={page1} id="1" className="button_pages btn1" ></img>
      </Link>
      <Link className="a_button" to="/example2">
        <img src={page2} id="2" className="button_pages btn2"></img>
      </Link>
      <Link className="a_button" to="/example3">
        <img src={page3} id="3" className="button_pages btn3"></img>
      </Link>
    </div>
  </div>
);

export default App;
