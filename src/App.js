import { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  let repeatedBlock = "";
  for (let index = 0; index < count; index++) {
    repeatedBlock = <p>repeated {index + 1}</p>;
  }
  return (
    <div className="App">
      <h1>Click number = {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click to see some magic happen!
      </button>
      {repeatedBlock}
    </div>
  );
}

export default App;
