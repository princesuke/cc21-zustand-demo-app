import React from "react";
import { useCounterStore } from "../stores/counterStore";

export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      Count: {count}
      {count >= 10 && <p style={{ color: "red" }}>Count reached 10!</p>}
    </div>
  );
}

// ถ้า count มีค่า เกิน 10
//ให้แสดง คำว่า Count reached 10!
// สีแดง
