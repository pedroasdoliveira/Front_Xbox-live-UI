import { useNavigate } from "react-router-dom";
import * as Style from "./Games-style";
import { FiSearch } from "react-icons/fi";
import GenrerOption from "components/GenrerOption/GenrerOption";

const GamesList = () => {
  const navigate = useNavigate();

  return (
    <Style.GamesList>
      <Style.BackIcon onClick={() => navigate("/profile/homepage")} />

      <Style.ListSection>

        <Style.Search>
          <Style.SearchInput type="text" placeholder=" Pesquisar" />
          <Style.SearchIcon>
            <FiSearch />
          </Style.SearchIcon>
        </Style.Search>

        <Style.Categories>
          <Style.SectionsSearch>Todos os jogos</Style.SectionsSearch>
          <Style.SectionsSearch>Todos os jogos favoritos</Style.SectionsSearch>
        </Style.Categories>

        <GenrerOption />

      </Style.ListSection>
    </Style.GamesList>
  );
};

export default GamesList;
