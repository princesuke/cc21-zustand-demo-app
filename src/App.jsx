// import { useState } from "react";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import CounterDisplay from "./components/CounterDisplay";
import ButtonPanel from "./components/ButtonPanel";
import ThemeToggle from "./components/ThemeToggle";
import UserProfile from "./components/UserProfile";

function App() {
  // const [user, setUser] = useState({ name: "John" });

  return (
    <>
      <UserProfile />
      <br />
      <br />
      <ThemeToggle />
      <br />
      <br />
      <CounterDisplay />
      <ButtonPanel />

      {/* <h1>Hello, {user.name}</h1> */}
      {/* <Dashboard user={user} /> */}
    </>
  );
}

export default App;
