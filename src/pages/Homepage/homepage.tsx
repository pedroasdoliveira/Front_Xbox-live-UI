import { useNavigate } from 'react-router-dom'
import * as Style from './homepage-style'

const Homepage = () => {
    const navigate = useNavigate()

  return (
    <Style.Homepage>
        <Style.BackIcon onClick={() => navigate('/profiles')} />

        <Style.CardSection>

            <Style.CardGame>
                Lorem ipsum dolor sit amet
            </Style.CardGame>

            <Style.CardGame>
                Lorem ipsum dolor sit amet
            </Style.CardGame>

            <Style.CardGame>
                Lorem ipsum dolor sit amet
            </Style.CardGame>

        </Style.CardSection>

        <Style.InfoSection>

            <Style.InfoCard onClick={() => navigate('/profile/homepage/list')}>
                <p>Minha biblioteca</p>
            </Style.InfoCard>

        </Style.InfoSection>

    </Style.Homepage>
  )
}

export default Homepage