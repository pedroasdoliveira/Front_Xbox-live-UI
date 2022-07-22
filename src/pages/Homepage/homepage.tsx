import CreateGamesAdmin from "components/Create/CreateGames";
import ReturnPage from "components/ReturnPage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FavoriteGamesType } from "types/interfaces";
import { HomepageProfile } from "Service/homepageService";
import * as Style from "./homepage-style";
import { Favorite } from "Service/favoriteService";
import CreateGenrerAdmin from "components/Create/CreateGenre";
import { url } from "inspector";
import CardGames from "components/CardGames/List";

const Homepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favoriteGames, setFavoriteGames] = useState<FavoriteGamesType>({
    games: [
      {
        id: '',
        title: "",
        coverImageUrl: "",
        description: "",
        imbScore: 0,
        genders: [
          {
            name: "",
          },
        ],
      },
    ],
    id: "",
  });

  useEffect(() => {
    profileFavoriteGames();
  }, []);

  const profileFavoriteGames = async () => {
    if (id) {
      const res = await Favorite.GetFavoriteByProfileId(id);
      setFavoriteGames(res?.data.favoriteGames);
    }
  };

  return (
    <Style.Homepage>
      <ReturnPage Route={() => navigate("/profiles")} />

      <CreateGamesAdmin
        Route={() => navigate(`/profile/createGames&Genrer/${id}`)}
      />
      <CreateGenrerAdmin Route={() => navigate(`/profile/genrers/${id}`)} />

      <Style.CardSection>
        {favoriteGames.games.map((game, index) => (
          <Style.ContentCard key={index}>
            <Style.TitleGame>{game.title}</Style.TitleGame>
            <Style.CoverImageGame onClick={() => navigate(`/profile/game/${game.id}`)} src={game.coverImageUrl} alt={'image de fundo do jogo' + game.title} />
            <Style.ScoreGame>{game.imbScore}</Style.ScoreGame>
          </Style.ContentCard>
        ))}
      </Style.CardSection>

      <Style.InfoSection>
        <Style.InfoCard
          onClick={() => navigate(`/profile/homepage/list/${id}`)}
        >
          <p>Minha biblioteca</p>
        </Style.InfoCard>
        <Style.InfoCard onClick={() => navigate(`/profile/homepage/library`)}>
          <p>Ver tudo disponivel</p>
        </Style.InfoCard>
      </Style.InfoSection>
    </Style.Homepage>
  );
};

export default Homepage;
