import "../index.css";
const Counter = ({ count, setCount }) => {
  const substraction = () => {
    if (count > 0) setCount(count - 1);
  };

  const addition = () => {
    if (count <= 4) {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={substraction}> - 1</button>
      <div id="count">{count}</div>
      <button onClick={addition}> + 1</button>
    </div>
  );
};

export default Counter;
