import { useNavigate } from 'react-router-dom'
import * as Style from './Games-style'
import { FiSearch } from 'react-icons/fi'
import GenrerOption from 'components/GenrerOption/GenrerOption'

const GamesList = () => {
  const navigate = useNavigate()

  return (
    <Style.GamesList>
      <Style.BackIcon onClick={() => navigate('/profile/homepage')} />

      <Style.ListSection>
        <Style.SearchInput type='text' placeholder=' Pesquisar' />
        <Style.SearchIcon><FiSearch /></Style.SearchIcon>

        <GenrerOption />
      </Style.ListSection>
    </Style.GamesList>
  )
}

export default GamesList