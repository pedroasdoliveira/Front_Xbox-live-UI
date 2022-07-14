import * as Style from "./style";
import { FiSearch } from "react-icons/fi";

interface SearchGame {
  value: string;
  handleSearchValue: (e: any) => void;
}

const SearchGames = (props: SearchGame) => {
  return (
    <Style.Search>
      <Style.SearchInput
        type="text"
        placeholder=" Pesquisasr jogo"
        value={props.value}
        onChange={props.handleSearchValue}
      />
      <Style.SearchIcon>
        <FiSearch />
      </Style.SearchIcon>
    </Style.Search>
  );
};

export default SearchGames;
