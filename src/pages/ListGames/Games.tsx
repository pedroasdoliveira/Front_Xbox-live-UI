import * as Style from "./Games-style";
import { useNavigate } from "react-router-dom";
import ReturnPage from "components/ReturnPage";
import SearchGames from "components/Search/Games";
import GenrerOption from "components/GenrerOption/GenrerOption";
import CardGames from "components/CardGames/List";
import { ChangeEvent, useEffect, useState } from "react";
import { GamesTypes } from "types/interfaces";
import { GetGames } from "Service/gamesService";

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

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Style.GamesList>
      <ReturnPage Route={() => navigate("/profile/homepage")} />

      <Style.ListSection>
        <SearchGames value={search} handleSearchValue={handleSearchValue} />

        <Style.Categories>
          <Style.SectionsSearch>Todos os jogos</Style.SectionsSearch>
          <Style.SectionsSearch>Todos os jogos favoritos</Style.SectionsSearch>
        </Style.Categories>

        <GenrerOption />

        <Style.ContainerCard>
          {search !== ""
            ? games
                .filter(
                  (e: GamesTypes) =>
                    e.title.toLowerCase().includes(search.toLowerCase()) ||
                    e.year.toFixed().includes(search.toLowerCase()) ||
                    e.imbScore.toFixed().includes(search.toLowerCase())
                )
                .map((game) => (
                  <CardGames key={game.id} title={game.title}>
                    <Style.CoverImageGame src={game.coverImageUrl} alt="" />
                    <Style.GenrerGame>
                      {game.genders.map((genrer) => (
                        <span key={genrer.id}>{genrer.name}</span>
                      ))}
                    </Style.GenrerGame>
                    <p>{game.year}</p>
                    <p>{game.imbScore}</p>
                  </CardGames>
                ))
            : games.map((game) => (
                <CardGames key={game.id} title={game.title}>
                  <Style.CoverImageGame src={game.coverImageUrl} alt="" />
                  <Style.GenrerGame>
                    {game.genders.map((genrer) => (
                      <span key={genrer.id}>{genrer.name}</span>
                    ))}
                  </Style.GenrerGame>
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
