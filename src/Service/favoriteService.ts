import Api from "./api";
import swal from "sweetalert";

export const Favorite = {
  GetFavoriteByProfileId: async (id: string) => {
    try {
      const res = await Api.get(`/favorites/${id}`);
      return res
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
