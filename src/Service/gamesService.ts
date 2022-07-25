import Api from "./api";
import swal from "sweetalert";
import { CreateGameType, GamesTypes } from "types/interfaces";

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

  GameById: async (id: string) => {
    try {
      const res = await Api.get(`/games/${id}`);
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

  CreateGame: async (game: CreateGameType) => {
    try {
      const res = await Api.post("/games", game);
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

  EditGame: async (id: string, game: CreateGameType) => {
    try {
      const res = await Api.patch(`/games/${id}`, game);
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

  DeleteGame: async (id: string) => {
    try {
      const res = await Api.delete(`/games/${id}`);
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
