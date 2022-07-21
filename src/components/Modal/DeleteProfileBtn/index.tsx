import { useNavigate, useParams } from "react-router-dom";
import { Profiles } from "Service/profileService";
import swal from "sweetalert";
import * as Style from "./style";

const DeleteProfileBtn = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteProfile = async () => {
    if (id) {
      const payloadDelete = await Profiles.DeleteProfile(id);

      if (payloadDelete) {
        swal({
          title: "Perfil deletado!",
          icon: "success",
          timer: 6000,
        });
        navigate("/profiles");
      } else {
        swal({
          title: "Error",
          text: "Erro ao deletar o perfil!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  return (
    <>
      <Style.DeleteProfileBtn type="button" onClick={handleDeleteProfile}>
        Deletar
      </Style.DeleteProfileBtn>
    </>
  );
};

export default DeleteProfileBtn;
