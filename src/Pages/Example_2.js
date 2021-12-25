import "./Example2.css";
import Ref2_mid from "./components/example2/Ref2_mid";
import logo from "./components/pictures/bunny-12988641.svg";
import Top_text from "./components/example2/Top_text";
import Nav from "./components/example2/Nav";
function Example_2() {
  return (
    <div className="ref_2">
      <div className="ref2_logo_box">
        <h1>RABBIT</h1>
        <div className="ref2_logo_backg">
          <img className="ref2_logo" src={logo} alt="logo"></img>
        </div>
      </div>

      <div className="ref2_top">
        <Top_text />
        <Nav />
      </div>
      <div className="ref2_top_mid_backg"/>
      <Ref2_mid />
    </div>
  );
}

export default Example_2;
