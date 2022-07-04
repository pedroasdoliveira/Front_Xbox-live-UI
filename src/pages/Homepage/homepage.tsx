import { useNavigate } from 'react-router-dom'
import * as Style from './homepage-style'

const Homepage = () => {
    const navigate = useNavigate()

  return (
    <Style.Homepage>
        <Style.BackIcon onClick={() => navigate('/profiles')} />

        
    </Style.Homepage>
  )
}

export default Homepage