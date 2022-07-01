import Edit from "assets/icon/edit_profile.svg";
import Avatar01 from "assets/img/avatar_1.png";
import { useNavigate } from "react-router-dom";
import * as Style from "./profiles-style";

const Profiles = () => {
  const navigate = useNavigate();

  const handleNavigateEdit = () => {
    navigate("/profiles/settings");
  };

  return (
    <Style.Background>
      <Style.BackIcon onClick={() => navigate('/')} />

      <Style.ProfileSection>
        <Style.ProfileDiv>
          <Style.Profileimg src={Avatar01} alt="" />

          <Style.ProfileDescription>Pedro</Style.ProfileDescription>

          <Style.ProfileEdit onClick={handleNavigateEdit} src={Edit} alt="" />
        </Style.ProfileDiv>

        <Style.ProfileDiv>
          <Style.Profileimg src={Avatar01} alt="" />

          <Style.ProfileDescription>Pedro</Style.ProfileDescription>

          <Style.ProfileEdit onClick={handleNavigateEdit} src={Edit} alt="" />
        </Style.ProfileDiv>

        <Style.ProfileDiv>
          <Style.Profileimg src={Avatar01} alt="" />

          <Style.ProfileDescription>Pedro</Style.ProfileDescription>

          <Style.ProfileEdit onClick={handleNavigateEdit} src={Edit} alt="" />
        </Style.ProfileDiv>
      </Style.ProfileSection>
    </Style.Background>
  );
};

export default Profiles;
