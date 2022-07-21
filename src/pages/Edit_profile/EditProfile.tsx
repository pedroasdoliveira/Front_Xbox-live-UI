import ContainerForm from "components/ContainerForm";
import ReturnPage from "components/ReturnPage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { ProfilesTypes } from "types/interfaces";
import { Profiles } from "Service/profileService";
import * as Style from "./EditProfile-style";

const EditProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [profile, setProfile] = useState<ProfilesTypes>({
    title: "",
    imageUrl: "",
    userId: "",
  });

  useEffect(() => {
    getProfileId();
  }, []);

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((values: ProfilesTypes) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const getProfileId = async () => {
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

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getUserId = localStorage.getItem("userId");

    if (getUserId) {
      setProfile({
        ...profile,
        userId: getUserId,
      });
    }

    if (id) {
      const payload: any = await Profiles.EditProfile(id, profile);

      if (payload) {
        swal({
          title: "Perfil atualizado!",
          icon: "success",
          timer: 6000,
        });
        navigate("/profiles");
      } 
      else {
        swal({
          title: "Error",
          text: "Erro ao atualizar o perfil!",
          icon: "error",
          timer: 6000,
        });
      }
    }
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

          <Style.EditProfileBtn type="submit">Atualizar</Style.EditProfileBtn>
        </Style.EditForm>
      </ContainerForm>
    </Style.Background>
  );
};

export default EditProfile;
