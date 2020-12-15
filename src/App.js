import React from "react";
import "./App.css";
import Title from "./components/title";
import Counter from "./components/counter";
import Button from "./components/button";

import { useState } from "react";
function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increaseCounter1 = React.useCallback(
    () => setCounterOne(counterOne + 1),
    [counterOne]
  );
  const increaseCounter2 = React.useCallback(
    () => setCounterTwo(counterTwo + 1),
    [counterTwo]
  );
  return (
    <div className="App">
      <Title />
      <Counter text="counter1" value={counterOne} />
      <Button handleClick={increaseCounter1}>increate counter1</Button>
      <Counter text="counter2" value={counterTwo} />
      <Button handleClick={increaseCounter2}>increate counter2</Button>
    </div>
  );
}

export default App;
