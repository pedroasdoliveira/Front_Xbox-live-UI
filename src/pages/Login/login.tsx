import Control from "assets/img/controle_xbox.png";
import Logo from 'assets/img/xbox-black-icon.png';
import ReturnPage from "components/ReturnPage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "Service/authService";
import swal from "sweetalert";
import { UserLogin } from "types/interfaces";
import * as Style from "./login-style";

const Login = () => {
  const navigation = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: UserLogin) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await loginService.Login(values);

    if (!response) {
      swal({
        title: 'Erro de login',
        text: 'Usuário e/ou senha inválidos',
        icon: 'error',
        timer: 6000,
      })
    }

    const jwt = response.data.token;
    const userId = response.data.user.id;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem('userId', userId);
      swal({
        title: "Bem vindo",
        icon: "success",
        timer: 3000,
      });
      navigation("/profiles");
    }
  };

  return (
    <Style.Login>
      <main>
        <ReturnPage Route={() => navigation('/')} />
        <Style.LoginLogo src={Logo} alt="Logo Xbox" />
        <Style.LoginSection>
          <Style.LoginContent onSubmit={handleLogin}>
            <Style.LoginImg src={Control} alt="controle xbox one" />

            <Style.LoginInput
              type="text"
              name="email"
              id="email"
              placeholder=" Digite o seu E-mail de acesso"
              required
              onChange={handleChangesValues}
            />

            <Style.LoginInput
              type="password"
              name="password"
              id="password"
              placeholder=" Digite sua senha de acesso"
              required
              onChange={handleChangesValues}
            />

            <Style.LoginDescription>
              Não tem uma conta criada?{" "}
              <Style.LoginStrong>
                <Link to={"/singup"}>Crie uma aqui!</Link>
              </Style.LoginStrong>
            </Style.LoginDescription>

            <Style.LoginButton type="submit">Login</Style.LoginButton>
          </Style.LoginContent>
        </Style.LoginSection>
      </main>
    </Style.Login>
  );
};

export default Login;
