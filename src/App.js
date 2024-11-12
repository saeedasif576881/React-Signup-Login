import "./App.css";
import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <button className="btn" onClick={() => setcount(count + 1)}>Count</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
