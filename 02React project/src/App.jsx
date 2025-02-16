import "./App.css";
import { useState } from "react";
function App() {
  const [current, setCurrent] = useState(5);

  const addNumber = () => {
    setCurrent(current + 1);
  };
  const removeNumber = () => {
    if (current < 1) {
      return setCurrent(0);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <h1>abe oe</h1>
      <h2 id="counter_manipulate">
        kya haal chaal timer value dekh: {current}
      </h2>
      <button onClick={addNumber}>add karu ?</button>
      <br />
      <button onClick={removeNumber}>remove karu?</button>
    </>
  );
}

export default App;
