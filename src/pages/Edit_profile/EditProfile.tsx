import { useNavigate } from 'react-router-dom'
import * as Style from './EditProfile-style'

const EditProfile = () => {
    const navigate = useNavigate()

  return (
    <Style.Background>
        <Style.BackIcon onClick={() => navigate('/profiles')} />

        <Style.CreateContainer>
            
        </Style.CreateContainer>
    </Style.Background>
  )
}

export default EditProfile