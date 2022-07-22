import Api from "./api";
import swal from "sweetalert";
import { CreateGenrerType } from "types/interfaces";

export const Genrers = {
  AllGenrers: async () => {
    try {
      const res = await Api.get("/genders", { method: "GET" });
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },

  GetGenrerById: async (id: string) => {
    try {
      const res = await Api.get(`/genders/${id}`);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },

  CreateGenrer: async (genrer: CreateGenrerType) => {
    try {
      const res = await Api.post("/genders", genrer);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },

  EditGenrer: async (id: string, genrer: CreateGenrerType) => {
    try {
      const res = await Api.patch(`/genders/${id}`, genrer);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },

  DeleteGenrer: async (id: string) => {
    try {
      const res = await Api.delete(`/genders/${id}`);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
