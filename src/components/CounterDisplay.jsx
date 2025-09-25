import React from "react";
import { useCounterStore } from "../stores/counterStore";

export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return <div>Count: {count}</div>;
}
