import Navbar from "./components/example1/Navbar";
import Ref1_mid from "./components/example1/Ref1_mid";
import Ref1_top from "./components/example1/Ref1_top";
import "./Example1.css"
function Example_1() {
  return (
    <div className="ref_1">
      <Navbar/>
      <Ref1_top />
      <Ref1_mid />
    </div>
  );
}

export default Example_1;
