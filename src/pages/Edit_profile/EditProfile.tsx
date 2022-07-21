import ContainerForm from "components/ContainerForm";
import ReturnPage from "components/ReturnPage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { ProfilesTypes } from "types/interfaces";
import { Profiles } from "Service/profileService";
import * as Style from "./EditProfile-style";
import DeleteProfileBtn from "components/Modal/DeleteProfileBtn";

const EditProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // Pegando o Id do perfil salvo na Url da rota utilizando o useParams

  const [profile, setProfile] = useState<ProfilesTypes>({
    title: "",
    imageUrl: "",
    userId: "",
  });

  useEffect(() => {
    getProfileId();
  }, []);

  const getProfileId = async () => { // Pegando as informações conforme o Id do Profile
    if (id) {
      const GetByIdProfile = await Profiles.ProfileGetById(id);

      const profileValues = {
        title: GetByIdProfile?.data.title,
        imageUrl: GetByIdProfile?.data.imageUrl,
        userId: GetByIdProfile?.data.userId,
      };

      setProfile({
        ...profile,
        ...profileValues,
      });
    }
  };

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => { // Atualizando os valores do perfil salvos
    setProfile((values: ProfilesTypes) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => { // Editando o perfil pelo Id pego e as informações do state
    e.preventDefault();

    const getUserId = localStorage.getItem("userId");

    if (getUserId) {
      setProfile({
        ...profile,
        userId: getUserId,
      });
    }

    if (id) {
      const payloadEdit: any = await Profiles.EditProfile(id, profile);

      if (payloadEdit) {
        swal({
          title: "Perfil atualizado!",
          icon: "success",
          timer: 6000,
        });
        navigate("/profiles");
      } else {
        swal({
          title: "Error",
          text: "Erro ao atualizar o perfil!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  const handleDeleteProfile = async () => { // Deletar o perfil pelo Id pego no useParams

    if (id) {
      const payloadDelete = await Profiles.DeleteProfile(id);

      if (payloadDelete) {
        swal({
          title: "Perfil deletado!",
          icon: "success",
          timer: 6000,
        });
        navigate("/profiles");
      }
      else {
        swal({
          title: "Error",
          text: "Erro ao deletar o perfil!",
          icon: "error",
          timer: 6000,
        });
      }
    }
    
    // if (id) {
    //   const payloadDelete = await Profiles.DeleteProfile(id);

    //   swal({
    //     title: `Deseja deletar o perfil ${profile.title}?`,
    //     icon: 'warning',
    //     buttons: {
    //       no: {
    //         text: 'Não!',
    //         value: 'not',
    //       },
    //       yes: {
    //         text: 'Sim',
    //         value: 'delete',
    //       }
    //     }
    //   })
    //   .then((value) => {
    //     switch(value) {
    //       case 'yes':

    //         if (payloadDelete) {
    //           swal({
    //             title: 'Perfil deletado!',
    //             timer: 6000,
    //           });
    //           console.log(payloadDelete)
    //           console.log(profile)
    //           // navigate("/profiles");
    //         }
    //         else {
    //           swal({
    //             title: 'Error',
    //             text: 'Não foi possivel deletar o perfil!',
    //             icon: 'error',
    //             timer: 6000,
    //           })
    //         }

    //       break;

    //       case 'no':
    //         navigate(`/profiles/edit/${id}`)
    //       break;
    //     }
    //   })
    // }
  };

  return (
    <Style.Background>
      <ReturnPage Route={() => navigate("/profiles")} />

      <ContainerForm>
        <Style.EditImg src={profile.imageUrl ? profile.imageUrl : ""} />

        <Style.EditForm onSubmit={handleEditProfile}>
          <Style.InputEdit
            type="text"
            placeholder=" Url da imagem"
            name="imageUrl"
            id="imageUrl"
            value={profile.imageUrl}
            onChange={handleChangeValues}
            required
          />

          <Style.InputEdit
            type="text"
            placeholder=" Nome do perfil"
            name="title"
            id="title"
            value={profile.title}
            onChange={handleChangeValues}
            required
          />

          <Style.ContainerBtns>
            <Style.EditProfileBtn type="submit">Atualizar</Style.EditProfileBtn>
            <DeleteProfileBtn />
          </Style.ContainerBtns>
        </Style.EditForm>
      </ContainerForm>
    </Style.Background>
  );
};

export default EditProfile;
