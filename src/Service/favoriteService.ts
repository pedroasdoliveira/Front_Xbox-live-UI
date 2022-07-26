import Api from "./api";
import swal from "sweetalert";
import { AddFavorite } from "types/interfaces";

export const Favorite = {
  GetFavoriteByProfileId: async (id: string) => {
    try {
      const res = await Api.get(`/favorites/${id}`);
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

  FavoriteGame: async (id: string, favorite: AddFavorite) => {
    try {
      const res = await Api.patch(`/favorites/${id}`, favorite);
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
