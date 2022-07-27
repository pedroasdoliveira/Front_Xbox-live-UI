import ContainerForm from "components/ContainerForm";
import ReturnPage from "components/ReturnPage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "Service/userService";
import { UserType, GetUserType } from "types/interfaces";
import * as Style from "./style";

const UserConfigs = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<GetUserType>({
    name: "",
    nickname: "",
    email: "",
    cpf: "",
    password: "",
    isAdmin: false,
  });

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    if (id) {
      const payloadUser = await User.GetUserById(id);
      console.log(payloadUser?.data);

      const userDatas = {
        name: payloadUser?.data.name,
        nickname: payloadUser?.data.nickname,
        email: payloadUser?.data.email,
        cpf: payloadUser?.data.cpf,
        password: payloadUser?.data.password,
        isAdmin: payloadUser?.data.isAdmin,
      };

      setUser({
        ...user,
        ...userDatas,
      });
    }
  };

  return (
    <Style.Page>
      <ReturnPage Route={() => navigate(-1)} />

      <ContainerForm>
        <Style.Info>Gerenciamento de usuário</Style.Info>

        <Style.Form>
          <Style.Inputs
            type="text"
            placeholder=" Nome do usuário"
            name="name"
            id="name"
            value={user.name}
            required
          />

          <Style.Inputs
            type="text"
            placeholder=" Nickname do usuário"
            name="nickname"
            id="nickname"
            value={user.nickname}
            required
          />

          <Style.Inputs
            type="text"
            placeholder=" Email do usuário"
            name="email"
            id="email"
            value={user.email}
            required
          />

          <Style.Btn>Editar</Style.Btn>
        </Style.Form>
      </ContainerForm>
    </Style.Page>
  );
};

export default UserConfigs;
