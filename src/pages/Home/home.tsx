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
      <Style.HomeTitle>Bem vindo a Xbox Live</Style.HomeTitle>

      <Style.HomeSection>
        <Style.HomeDescription>Clique no botão abaixo para fazer seu login</Style.HomeDescription>
        <Style.IconLog><SiXbox onClick={handleNavigate}/></Style.IconLog>
      </Style.HomeSection>
    </Style.Home>
  )
}

export default Home