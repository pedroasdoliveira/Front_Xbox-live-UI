import * as Style from "./profiles-style";
import Back from "assets/icon/Voltar.svg";
import Avatar01 from "assets/img/avatar_1.png";
import Edit from 'assets/icon/edit_profile.svg'
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <Style.Background>
      <Link to={"/"}>
        <Style.BackIcon src={Back} alt="Botão para voltar" />
      </Link>

      <Style.ProfileSection>
        <Style.ProfileDiv>
          <Style.Profileimg src={Avatar01} alt="" />

          <Style.ProfileDescription>Pedro</Style.ProfileDescription>

            <Style.ProfileEdit src={Edit} alt="" />
        </Style.ProfileDiv>

        <Style.ProfileDiv>
          <Style.Profileimg src={Avatar01} alt="" />

          <Style.ProfileDescription>Pedro</Style.ProfileDescription>

          <Style.ProfileEdit src={Edit} alt="" />
        </Style.ProfileDiv>
      </Style.ProfileSection>
    </Style.Background>
  );
};

export default Profiles;
