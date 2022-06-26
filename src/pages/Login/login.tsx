import * as Style from "./login-style";
import XboxLogo from 'assets/icon/xbox-logo.svg'
import Control from 'assets/img/controle_xbox.png'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();

  return (
    <Style.Login>
      <main>
        <Style.LoginLogo src={XboxLogo} alt="Logo Xbox" />
        <Style.LoginSection>
          <Style.LoginContent>
            <Style.LoginImg src={Control} alt="controle xbox one" />

            <Style.LoginInput
              type="text"
              id="email"
              placeholder="Digite o seu E-mail de acesso"
              required
            />

            <Style.LoginInput
              type="password"
              id="password"
              placeholder="Digite sua senha de acesso"
              required
            />

            <Style.LoginDescription>
              Não tem uma conta criada? <Style.LoginStrong><Link to={'/singup'}>Crie uma aqui!</Link></Style.LoginStrong>
            </Style.LoginDescription>

            <Style.LoginButton type="submit">Login</Style.LoginButton>
          </Style.LoginContent>
        </Style.LoginSection>
      </main>
    </Style.Login>
  );
};

export default Login;
