import Api from "./api";
import swal from "sweetalert";

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
};
