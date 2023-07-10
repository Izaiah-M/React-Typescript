import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0); // adding the number to the angle brackets is just a way of being explicit, but you can do without it
  const [words, setWords] = useState<string | null>(null); // this is necessary if you want to declare something as null but intend to use it in the future

  const handleCount = () => {
    setCount((prev) => prev + 1);
    setWords("great count");
  };

  return (
    <div>
      <h4>Count is {count}</h4>
      <button onClick={handleCount}>Add to Count</button>

      <p>{words}</p>
    </div>
  );
};

export default Counter;
