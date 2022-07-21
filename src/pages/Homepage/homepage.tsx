import CreateGamesAdmin from "components/Create/CreateGames";
import ReturnPage from "components/ReturnPage";
import { Games } from "Mocks/Games";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FavoriteGamesType } from "types/interfaces";
import { HomepageProfile } from 'Service/homepageService'
import * as Style from "./homepage-style";

const Homepage = () => {
  const {id} = useParams()
  const navigate = useNavigate();

  const [favoriteGames, setFavoriteGames] = useState<FavoriteGamesType[]>([]);

  useEffect(() => {
    profileFavoriteGames();
  }, []);

  const profileFavoriteGames = async () => {
    if (id) {
      const payloadFavorite = await HomepageProfile.HomeByProfileId(id)
      console.log(payloadFavorite?.data);
      setFavoriteGames(payloadFavorite?.data.profileData.favoriteGames);
    }
  }

  return (
    <Style.Homepage>
      <ReturnPage Route={() => navigate("/profiles")} />

      <CreateGamesAdmin />

      <Style.CardSection>
        {/* {favoriteGames.map((favorite, index) => ( // Erro: favoriteGames is not function
          <div key={index}>
            {favorite.games.map((game, index) => (
              <Style.CardGame key={index}>
                <Style.TitleGame>{game.title}</Style.TitleGame>
              </Style.CardGame>
            ))}
          </div>
        ))} */}
      </Style.CardSection>

      <Style.InfoSection>
        <Style.InfoCard onClick={() => navigate("/profile/homepage/list")}>
          <p>Minha biblioteca</p>
        </Style.InfoCard>
      </Style.InfoSection>
    </Style.Homepage>
  );
};

export default Homepage;
