import ChangePassword from "components/ChangePassword";
import ContainerForm from "components/ContainerForm";
import ReturnPage from "components/ReturnPage";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "Service/userService";
import swal from "sweetalert";
import { UserType } from "types/interfaces";
import * as Style from "./style";

const UserConfigs = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<UserType>({
    name: "",
    nickname: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
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
        confirmPassword: payloadUser?.data.password,
        isAdmin: payloadUser?.data.isAdmin,
      };

      setUser({
        ...user,
        ...userDatas,
      });
    }
  };

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id) {
      const payloadUser = await User.UpdatedUser(id, user);

      if (payloadUser) {
        swal({
          title: "Usuário editado!",
          icon: "success",
          timer: 6000,
        });
        navigate(-1);
      } else {
        swal({
          title: "Error",
          text: "Não foi possivel editar o usuário!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  const DeleteUser = async () => {
    if (id) {
      const payloadRemove = await User.DeleteUser(id);

      if (payloadRemove) {
        swal({
          title: "Usuário deletado!",
          icon: "success",
          timer: 6000,
        });
        navigate("/");
      } else {
        swal({
          title: "Error",
          text: "Não foi possivel deletar o usuário",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  const handleDeleteUser = () => {
    swal({
      title: "Deseja apagar esse usuário?",
      text: "Todas as informações salvas no usuário serão apagadas!",
      icon: "warning",
      buttons: ["Não", "Sim"],
    }).then((resp) => {
      if (resp) {
        DeleteUser(); // FUNCAO QUE DELETA
      }
    });
  };

  return (
    <Style.Page>
      <ReturnPage Route={() => navigate(-1)} />

      <ContainerForm>
        <Style.Info>Gerenciamento de usuário</Style.Info>

        <Style.Form onSubmit={handleEditUser}>
          <Style.Inputs
            type="text"
            placeholder=" Nome do usuário"
            name="name"
            id="name"
            value={user.name}
            onChange={handleValues}
            required
          />

          <Style.Inputs
            type="text"
            placeholder=" Nickname do usuário"
            name="nickname"
            id="nickname"
            value={user.nickname}
            onChange={handleValues}
            required
          />

          <Style.Inputs
            type="text"
            placeholder=" Email do usuário"
            name="email"
            id="email"
            value={user.email}
            onChange={handleValues}
            required
          />

          <Style.BtnsRequests>
            <Style.BtnEdit type="submit">Editar</Style.BtnEdit>
            <Style.BtnDelete type="button" onClick={handleDeleteUser}>
              Deletar usuário
            </Style.BtnDelete>
          </Style.BtnsRequests>

          <ChangePassword />
        </Style.Form>
      </ContainerForm>
    </Style.Page>
  );
};

export default UserConfigs;
