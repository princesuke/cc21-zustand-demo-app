// import { useState } from "react";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  // const [user, setUser] = useState({ name: "John" });

  return (
    <>
      <CounterDisplay />

      {/* <h1>Hello, {user.name}</h1> */}
      {/* <Dashboard user={user} /> */}
    </>
  );
}

export default App;
