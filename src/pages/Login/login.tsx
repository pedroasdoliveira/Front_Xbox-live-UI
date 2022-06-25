import * as Style from "./login-style";
import Control from 'assets/img/controle_xbox.png'

const Login = () => {
  return (
    <Style.Login>
      <main>
        <Style.LoginSection>
          <Style.LoginContent>
            <Style.LoginImg src={Control} alt="controle xbox one" />

            <input
              type="text"
              id="email"
              placeholder="Digite o seu E-mail de acesso"
              required
            />

            <input
              type="password"
              id="password"
              placeholder="Digite sua senha de acesso"
              required
            />

            <p>Não tem uma conta criada?</p>

            <button type="submit">Login</button>
          </Style.LoginContent>
        </Style.LoginSection>
      </main>
    </Style.Login>
  );
};

export default Login;
