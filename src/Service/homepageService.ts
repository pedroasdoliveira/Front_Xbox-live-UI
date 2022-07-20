import Api from "./api";
import swal from "sweetalert";

export const Homepage = {
    HomeByProfileId: async (id: string) => {
        try {
            const res = await Api.get(`/homepage/${id}`)
        }
        catch (error: any) {

        }
    }
}