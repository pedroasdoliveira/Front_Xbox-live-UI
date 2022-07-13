import * as Style from "./Games-style";
import { useNavigate } from "react-router-dom";
import ReturnPage from "components/ReturnPage";
import SearchGames from "components/Search/Games";
import GenrerOption from "components/GenrerOption/GenrerOption";

const GamesList = () => {
  const navigate = useNavigate();

  return (
    <Style.GamesList>
      <ReturnPage Route={() => navigate("/profile/homepage")} />

      <Style.ListSection>

        <SearchGames />

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
