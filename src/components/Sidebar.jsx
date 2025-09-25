import React from "react";
import UserProfile from "./UserProfile";

export default function Sidebar({ user }) {
  return (
    <div>
      Sidebar {user.name}
      <UserProfile />
    </div>
  );
}
