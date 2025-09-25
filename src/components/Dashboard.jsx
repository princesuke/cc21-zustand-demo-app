import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard({ user }) {
  return (
    <div>
      Dashboard {user.name}
      <Sidebar user={user} />
    </div>
  );
}
