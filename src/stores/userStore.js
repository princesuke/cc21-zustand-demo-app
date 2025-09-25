import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

const userConfig = (set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    //เมื่อ fetch ทำงาน ให้บอกสถานะ loading ว่ากำลังโหลดอยู่
    set({ loading: true, error: null });
    try {
      const res = await axios.get("https://dummyjson.com/users/1");
      set({ user: res.data, loading: false });
    } catch (err) {
      set({ error: err?.message, loading: false });
    }
  },
});

export const useUserStore = create(
  //เอา  persist มาครอบ แล้วกำหนดชื่อ key user-storage
  persist(userConfig, { name: "user-storage" })
);
