import * as Style from './style'
import { FiSearch } from "react-icons/fi";

const SearchGames = () => {
  return (
    <Style.Search>
        <Style.SearchInput type='text' placeholder=' Pesquisasr jogo' />
        <Style.SearchIcon>
            <FiSearch />
        </Style.SearchIcon>
    </Style.Search>
  )
}

export default SearchGames