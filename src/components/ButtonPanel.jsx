import React from "react";
import { useCounterStore } from "../stores/counterStore";

export default function ButtonPanel() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <button onClick={() => increment()}>+1</button>&nbsp;
      <button onClick={() => decrement()}>-1</button>
    </div>
  );
}
