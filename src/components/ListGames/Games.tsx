import { useNavigate } from 'react-router-dom'
import * as Style from './Games-style'

const GamesList = () => {
  const navigate = useNavigate()

  return (
    <Style.GamesList>
      <Style.BackIcon onClick={() => navigate('/profile/homepage')} />

      <Style.ListSection>
        
      </Style.ListSection>
    </Style.GamesList>
  )
}

export default GamesList