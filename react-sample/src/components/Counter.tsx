import { useState } from "react";

type propType = {
  initialValue: number;
};

const Counter = (props: propType) => {
  const { initialValue } = props;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>count: {count}</p>
      {/* どっちのパターンでもいける */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default Counter;
