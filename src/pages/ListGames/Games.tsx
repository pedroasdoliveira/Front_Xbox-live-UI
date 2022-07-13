import * as Style from "./Games-style";
import { useNavigate } from "react-router-dom";
import ReturnPage from "components/ReturnPage";
import SearchGames from "components/Search/Games";
import GenrerOption from "components/GenrerOption/GenrerOption";
import CardGames from "components/CardGames/List";
import { useEffect, useState } from "react";
import { GamesTypes } from "types/interfaces";
import { GetGames } from "Service/authService";

const GamesList = () => {
  const navigate = useNavigate();

  const [games, setGames] = useState<GamesTypes[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchGames = async () => {
      const payload: any = await GetGames.AllGames();
      console.log(payload.data);
      setGames(payload.data);
    };
    fetchGames();
  }, []);

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

        <Style.ContainerCard>
          {games.map((game) => (
            <CardGames key={game.id} title={game.title}>
                <Style.CoverImageGame src={game.coverImageUrl} alt="" />
                <p>{game.genders.name}</p>
                <p>{game.year}</p>
                <p>{game.imbScore}</p>
            </CardGames>
          ))}
        </Style.ContainerCard>
      </Style.ListSection>
    </Style.GamesList>
  );
};

export default GamesList;
