import { useNavigate } from 'react-router-dom'
import './home-style'
import { SiXbox } from 'react-icons/si'
import * as Style from './home-style'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <Style.Home>
      <h1>Bem vindo a Xbox Live</h1>

      <p>Clique no botão abaixo para fazer seu login</p>
      <i><SiXbox onClick={handleNavigate}/></i>
    </Style.Home>
  )
}

export default Home