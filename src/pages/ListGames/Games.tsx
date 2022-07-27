import CardGames from "components/CardGames/List";
import GenrerOption from "components/GenrerOption/GenrerOption";
import ReturnPage from "components/ReturnPage";
import SearchGames from "components/Search/Games";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { HomepageProfile } from "Service/homepageService";
import { GamesProfile } from "types/interfaces";
import * as Style from "./Games-style";

const GamesList = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [games, setGames] = useState<GamesProfile[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    gamesProfile();
  }, []);

  const gamesProfile = async () => {
    if (id) {
      const payload = await HomepageProfile.GetHomepageByProfileId(id);
      console.log(payload?.data.profileData.games);
      setGames(payload?.data.profileData.games);
    }
  };

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Style.GamesList>
      <ReturnPage Route={() => navigate(-1)} />

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
                  (e: GamesProfile) =>
                    e.title.toLowerCase().includes(search.toLowerCase()) ||
                    e.imbScore.toFixed().includes(search.toLowerCase())
                )
                .map((game, index) => (
                  <CardGames
                    idGame={game.id}
                    Route={() => navigate(`/profile/game/${game.id}`)}
                    key={index}
                    title={game.title}
                  >
                    <Style.CoverImageGame src={game.coverImageUrl} alt="" />
                    <Style.GenrerGame>
                      {game.genders.map((genrer, index) => (
                        <span key={index}>{genrer.name}</span>
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
                    {game.genders.map((genrer, index) => (
                      <span key={index}>{genrer.name}</span>
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
      </Style.ListSection>
    </Style.GamesList>
  );
};

export default GamesList;
