import ContainerForm from "components/ContainerForm";
import ReturnPage from "components/ReturnPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilesTypes } from "types/interfaces";
import { Profiles } from 'Service/profileService'
import * as Style from "./EditProfile-style";

const EditProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<ProfilesTypes>();

  return (
    <Style.Background>
      <ReturnPage Route={() => navigate("/profiles")} />

      <ContainerForm>
        <Style.EditImg src={profile?.imageUrl ? profile.imageUrl : ""} />

        <Style.EditForm>
          <Style.InputEdit
            type="text"
            placeholder=" Url da imagem"
            name="imageUrl"
            id="imageUrl"
            required
          />

          <Style.InputEdit
            type="text"
            placeholder=" Nome do perfil"
            name="title"
            id="title"
            required
          />

          <Style.EditProfileBtn>Atualizar</Style.EditProfileBtn>
        </Style.EditForm>
      </ContainerForm>
    </Style.Background>
  );
};

export default EditProfile;
