import React from "react";
import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";

export default function UserProfile() {
  const user = useUserStore((state) => state.user);
  //สร้างตัว fetch มารับ
  const fetchUser = useUserStore((state) => state.fetchUser);
  const loading = useUserStore((state) => state.loading);

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>
        {user?.firstName} {user?.lastName}
      </h2>
      <p>{user?.email}</p>
    </div>
  );
}
