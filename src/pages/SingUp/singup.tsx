import * as Style from './singup-style'
import XboxLogo from 'assets/icon/xbox-logo.svg'
import Back from 'assets/icon/Voltar.svg'
import { Link } from 'react-router-dom'

const SingUp = () => {
  return (
    <Style.Singup>

    <Link to={'/login'}>
      <Style.SingupBack src={Back} alt="Icone de voltar" />
    </Link>

    <Style.SingupLogo src={XboxLogo} alt="Logo Xbox" />

    <Style.SingupSection>
      <Style.SingupH2>Cadastro de usuário</Style.SingupH2>

      <Style.SingupForm>

      <Style.SingupInput
        type='text'
        id='name'
        placeholder='Digite o seu Nome'
        required
      />

      <Style.SingupInput
        type='text'
        id='nickname'
        placeholder='Crie o seu Nickname'
        required
      />

      <Style.SingupInput
        type='email'
        id='email'
        placeholder='Digite o seu E-mail'
        required
      />

      <Style.SingupInput
        type='text'
        id='cpf'
        placeholder='Coloque o seu CPF'
        required
      />

      <Style.SingupInput 
        type='password'
        id='password'
        placeholder='Digite uma senha'
        required
      />

      <Style.SingupInput 
        type='password'
        id='confirmPassword'
        placeholder='Confirme sua senha'
        required
      />

      <Style.SingupButton>Cadastrar</Style.SingupButton>

      </Style.SingupForm>
    </Style.SingupSection>

    </Style.Singup>
  )
}

export default SingUp