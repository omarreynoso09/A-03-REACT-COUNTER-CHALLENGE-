import NavBar from "./compoonents/NavBar";
import Counter from "./compoonents/Counter";
import Rating from "./compoonents/Rating";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <NavBar />
      <div className="main">
        <Counter count={count} setCount={setCount} />
        <Rating count={count} />
      </div>
    </div>
  );
}

export default App;
