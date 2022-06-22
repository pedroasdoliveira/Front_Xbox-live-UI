import { useNavigate } from 'react-router-dom'
import './home-style'
import { SiXbox } from 'react-icons/si'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <>
       <main>
        <h1>Bem vindo a Xbox Live</h1>

        <p>Clique no botão abaixo para fazer seu login</p>
        <i><SiXbox onClick={handleNavigate}/></i>
       </main>
    </>
  )
}

export default Home