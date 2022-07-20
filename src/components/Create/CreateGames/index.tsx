import { useNavigate } from 'react-router-dom'
import * as Style from './styled'

const CreateGamesAdmin = () => {
    const navigate = useNavigate()

  return (
    <Style.SectionItemsDiv>
        <Style.SepareItems>
            <Style.CreateGameIcon onClick={() => navigate('/profile/createGames&Genrer')} />
        </Style.SepareItems>
    </Style.SectionItemsDiv>
  )
}

export default CreateGamesAdmin