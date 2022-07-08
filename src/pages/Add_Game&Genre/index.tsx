import { useNavigate } from 'react-router-dom'
import * as Style from './style'

const CrudGamesGenrer = () => {
  const navigate = useNavigate()

  return (
    <Style.Page>
      <Style.BackIcon onClick={() => navigate('/profile/homepage')} />
    </Style.Page>
  )
}

export default CrudGamesGenrer