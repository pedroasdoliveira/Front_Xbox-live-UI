import { useNavigate } from "react-router-dom";
import * as Style from "./styles";
import Avatar01 from "assets/img/avatar_1.png";

const CreateProfile = () => {
  const navigate = useNavigate();

  return (
    <Style.Background>
      <Style.BackIcon onClick={() => navigate("/profiles")} />

      <Style.EditContainer>

        <Style.EditDivImg>
            <Style.EditImg src={Avatar01} />

            <Style.EditForm>

                <Style.EditChangeImg>Escolher Imagem</Style.EditChangeImg>

                <Style.EditChangeName 
                    type="text"
                    placeholder=" Nome do perfil"
                    id="name"
                    required
                />

               <Style.EditButton>Criar</Style.EditButton> 

            </Style.EditForm>
        </Style.EditDivImg>

      </Style.EditContainer>
    </Style.Background>
  );
};

export default CreateProfile;
