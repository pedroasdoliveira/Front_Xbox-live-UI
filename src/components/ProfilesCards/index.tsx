import Edit from "assets/icon/edit_profile.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profiles } from "Service/profileService";
import { ProfilesTypes } from "types/interfaces";
import * as Styled from "./style";

const ProfilesCards = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState<ProfilesTypes[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const payload: any = await Profiles.ProfilesUser();
      setProfiles(payload.data);
    };
    fetchProfiles();
  }, []);

  return (
    <Styled.ProfileDiv>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <Styled.Profileimg
            onClick={() => navigate("/profile/homepage")}
            src={profile.imageUrl}
            alt='Avatar do usuário'
          />

          <Styled.ProfileDescription>{profile.title}</Styled.ProfileDescription>

          <Styled.ProfileEdit src={Edit} alt="Icone de editar o perfil" />
        </div>
      ))}
    </Styled.ProfileDiv>
  );
};

export default ProfilesCards;
