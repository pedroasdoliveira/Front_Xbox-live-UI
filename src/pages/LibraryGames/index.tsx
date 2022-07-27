import CardGames from "components/CardGames/List";
import GenrerOption from "components/GenrerOption/GenrerOption";
import ReturnPage from "components/ReturnPage";
import SearchGames from "components/Search/Games";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { GamesTypes } from "types/interfaces";
import * as Style from "./style";

const LibraryAllGames = () => {
  const navigate = useNavigate();

  const [games, setGames] = useState<GamesTypes[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    const payloadGames = await GetGames.AllGames();
    setGames(payloadGames?.data);
  };

  const searchGames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Style.LibraryGames>
      <ReturnPage Route={() => navigate(-1)} />

      <Style.GamesSection>
        <SearchGames value={search} handleSearchValue={searchGames} />

        <Style.Categorie>
          <Style.SectionSearch>
            Todos os jogos disponiveis na plataforma
          </Style.SectionSearch>
        </Style.Categorie>

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
                  <CardGames
                    idGame={game.id}
                    Route={() => navigate(`/profile/game/${game.id}`)}
                    key={game.id}
                    title={game.title}
                  >
                    <Style.CoverImageGame src={game.coverImageUrl} alt="" />
                    <Style.GenrerGame>
                      {game.genders?.map((genrer) => (
                        <span key={genrer.id}>{genrer.name}</span>
                      ))}
                    </Style.GenrerGame>
                    <p>{game.year}</p>
                    <ReactStars
                      count={5}
                      value={game.imbScore}
                      edit={false}
                      size={35}
                      color2={"#ffd700"}
                    />
                  </CardGames>
                ))
            : games.map((game) => (
                <CardGames
                  idGame={game.id}
                  Route={() => navigate(`/profile/game/${game.id}`)}
                  key={game.id}
                  title={game.title}
                >
                  <Style.CoverImageGame src={game.coverImageUrl} alt="" />
                  <Style.GenrerGame>
                    {game.genders?.map((genrer) => (
                      <span key={genrer.id}>{genrer.name}</span>
                    ))}
                  </Style.GenrerGame>
                  <p>{game.year}</p>
                  <ReactStars
                    count={5}
                    value={game.imbScore}
                    edit={false}
                    size={35}
                    color2={"#ffd700"}
                  />
                </CardGames>
              ))}
        </Style.ContainerCard>
      </Style.GamesSection>
    </Style.LibraryGames>
  );
};

export default LibraryAllGames;
