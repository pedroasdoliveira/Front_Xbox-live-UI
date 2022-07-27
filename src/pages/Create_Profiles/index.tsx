import { useNavigate } from "react-router-dom";
import * as Style from "./styles";
import Avatar01 from "assets/img/avatar_1.png";
import ReturnPage from "components/ReturnPage";
import ContainerForm from "components/ContainerForm";
import { ProfilesTypes } from 'types/interfaces'
import React, { useState } from "react";
import swal from "sweetalert";
import { Profiles } from 'Service/profileService'

const CreateProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<ProfilesTypes>({
    imageUrl: '',
    title: '',
    userId: '',
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idUser = localStorage.getItem('userId');
    
    if (idUser) {
      setProfile((profile: ProfilesTypes) => ({
        ...profile,
        userId: idUser,
        [e.target.name]: e.target.value
      }))
    }
  }

  const handleCreateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = await Profiles.CreateProfile(profile)

    if (payload) {
      swal({
        title: "Cadastro com sucesso!",
        icon: "success",
        timer: 6000,
      });
      navigate('/profiles')
    }
    else {
      swal({
        title: "Error",
        icon: "error",
        timer: 6000,
      });
    }
  }

  return (
    <Style.Background>
      <ReturnPage Route={() => navigate("/profiles")} />

      <ContainerForm>
        <Style.Img src={profile.imageUrl ? profile.imageUrl : Avatar01} />

        <Style.Form onSubmit={handleCreateProfile}>
          <Style.InputCreate
            type="text"
            placeholder=" Url da imagem"
            name='imageUrl'
            id="imageUrl"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder=" Nome do perfil"
            name="title"
            id="title"
            onChange={handleValues}
            required
          />

          <Style.CreateProfileBtn>Criar</Style.CreateProfileBtn>
        </Style.Form>
      </ContainerForm>
    </Style.Background>
  );
};

export default CreateProfile;
