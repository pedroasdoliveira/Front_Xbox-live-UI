import Api from "./api";
import swal from "sweetalert";

export const HomepageProfile = {
  HomeByProfileId: async (id: string) => {
    try {
      const res = await Api.get(`/homepage/${id}`);
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
