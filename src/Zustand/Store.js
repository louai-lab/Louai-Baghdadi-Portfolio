import { create } from "zustand";
import axiosInstance from "../Utils/AxiosInstance";

export const useUserStore = create((set) => ({
  user: null,
  loading: true,

  getUser: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get("/user");
      if (response) {
        // console.log(response.data);
        set({ user: response.data, loading: false });
      }
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
