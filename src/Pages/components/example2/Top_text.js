import useMeasure from "react-use-measure";
import { useState, useRef } from "react";
import Text from "./Text";

function Top_text() {
  const word =
    "//    New  Collection  ***  New  Collection  ***  New  Collection  ***  New  Collection  ***  New  Collection  ";
  const lett = word.split("");
  const reset = useRef(false);
  const a = useRef(0);
  const b = useRef({ id: a.current, div: lett[a.current].toString() });
  const [newLetter, setNewLetter] = useState([
    { id: a.current, div: lett[a.current].toString() },
  ]);

  const newL = (k) => {
    if (a.current <= lett.length - 2) {
      a.current = a.current + 1;
      b.current = { id: a.current, div: lett[a.current].toString() };
      setNewLetter([...newLetter, b.current]);
    }
  };

  return (
    <div className="top_text">
      {newLetter.map((div, ind) => (
        <Text letter={div.div} letterId={div.id} newL={newL} reset={reset} letterlength={lett.length}/>
      ))}
    </div>
  );
}

export default Top_text;
