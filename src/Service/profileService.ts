import Api from "./api";
import swal from "sweetalert";

export const Profiles = {
  ProfilesUser: async () => {
    try {
      const res = await Api.get("/profile", { method: "GET" });
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
