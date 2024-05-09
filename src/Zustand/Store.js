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

export const useSkillsStore = create((set) => ({
  skills: [],
  loading: true,

  getSkills: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get("/skills");
      if (response) {
        set({ skills: response.data, loading: false });
      }
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));

export const useProjectsStore = create((set) => ({
  projects: [],
  loading: true,

  getProjects: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get("/projects");
      if (response) {
        set({ projects: response.data, loading: false });
      }
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));

export const useExperiencesStore = create((set) => ({
  experiences: [],
  loading: true,

  getExperiences: async () => {
    try {
      set({ loading: true });
      const response = await axiosInstance.get("/experiences");
      if (response) {
        set({ experiences: response.data, loading: false });
      }
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));
