import Api from "./api";
import swal from "sweetalert";

export const GetGames = {
  AllGames: async () => {
    try {
      const res = await Api.get("/games");
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
