import Logo from 'assets/img/xbox-black-icon.png';
import ReturnPage from 'components/ReturnPage';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterService } from 'Service/authService';
import swal from 'sweetalert';
import { RegisterUser } from 'types/interfaces';
import * as Style from './singup-style';

const SingUp = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState<RegisterUser>({
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
  })

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: RegisterUser) => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  }

  const handleRegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const response : any = await RegisterService.Register(values);

    if (!response) {
      swal({
        title: 'Erro de Cadastro',
        text: 'Informações incorretas!',
        icon: 'error',
        timer: 6000,
      })
    }

    const jwt = response.data.token;

    if (!jwt) {
      swal({
        title: 'Error!',
        text: `${response.data.message}`,
        icon: 'error',
        timer: 6000,
      })
    }

    localStorage.setItem('jwt', jwt);
    swal({
      title: 'Usuário cadastrado com sucesso!',
      icon: "success",
      timer: 6000,
    })

    navigate('/login')
  }

  return (
    <Style.Singup>

    <ReturnPage Route={() => navigate(-1)} />

    <Style.SingupLogo src={Logo} alt="Logo Xbox" />

    <Style.SingupSection>
      <Style.SingupH2>Cadastro de usuário</Style.SingupH2>

      <Style.SingupForm onSubmit={handleRegisterUser}>

      <Style.SingupInput
        type='text'
        name='name'
        id='name'
        placeholder=' Digite o seu Nome'
        required
        onChange={handleChangesValues}
      />

      <Style.SingupInput
        type='text'
        name='nickname'
        id='nickname'
        placeholder=' Crie o seu Nickname'
        required
        onChange={handleChangesValues}
      />

      <Style.SingupInput
        type='email'
        name='email'
        id='email'
        placeholder=' Digite o seu E-mail'
        required
        onChange={handleChangesValues}
      />

      <Style.SingupInput
        type='text'
        name='cpf'
        id='cpf'
        placeholder=' Coloque o seu CPF'
        required
        onChange={handleChangesValues}
      />

      <Style.SingupInput 
        type='password'
        name='password'
        id='password'
        placeholder=' Digite uma senha'
        required
        onChange={handleChangesValues}
      />

      <Style.SingupInput 
        type='password'
        name='confirmPassword'
        id='confirmPassword'
        placeholder=' Confirme sua senha'
        required
        onChange={handleChangesValues}
      />

      <Style.SingupButton type='submit'>Cadastrar</Style.SingupButton>

      </Style.SingupForm>
    </Style.SingupSection>

    </Style.Singup>
  )
}

export default SingUp