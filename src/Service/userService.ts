import Api from "./api";
import swal from "sweetalert";
import { UserType } from "types/interfaces";

export const User = {
  GetAllUsers: async () => {
    try {
      const res = await Api.get("/user");
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

  GetUserById: async (id: string) => {
    try {
      const res = await Api.get(`/user/${id}`);
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

  UpdatedUser: async (id: string, user: UserType) => {
    try {
      const res = await Api.patch(`/user/${id}`, user);
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

  DeleteUser: async (id: string) => {
    try {
      const res = await Api.delete(`/user/${id}`);
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
