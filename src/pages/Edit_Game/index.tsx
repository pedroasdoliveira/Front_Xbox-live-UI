import ContainerForm from 'components/ContainerForm'
import ReturnPage from 'components/ReturnPage'
import { useNavigate } from 'react-router-dom'
import * as Style from './style'

const EditGameId = () => {
    const navigate = useNavigate()

  return (
    <Style.MainPage>
        <ReturnPage Route={() => navigate(-1)}/>

        <ContainerForm>
            
        </ContainerForm>
    </Style.MainPage>
  )
}

export default EditGameId