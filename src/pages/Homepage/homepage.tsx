import CreateGamesAdmin from "components/Create/CreateGames";
import ReturnPage from "components/ReturnPage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FavoriteGamesType } from "types/interfaces";
import { HomepageProfile } from 'Service/homepageService'
import * as Style from "./homepage-style";
import { Favorite } from "Service/favoriteService";

const Homepage = () => {
  const {id} = useParams()
  const navigate = useNavigate();

  const [favoriteGames, setFavoriteGames] = useState<FavoriteGamesType[]>([]);

  useEffect(() => {
    profileFavoriteGames();
  }, []);

  const profileFavoriteGames = async () => {
    if (id) {
      await Favorite.GetFavoriteByProfileId(id)
      .then(data => setFavoriteGames(pre => ({...pre, games: data || []})));
      // setFavoriteGames({games: [payloadFavorite?.data.profileData.favoriteGames]});
      // console.log(payloadFavorite?.data.profileData.favoriteGames.games[0]);
      console.log('Esto aqui', favoriteGames)
    }
  }

  // const favGames = () => {
  //   if (favoriteGames == undefined) {
  //     return false
  //   }
  //   else {
  //     console.log('Esto aqui', favoriteGames)
  //   }
  // }
  // favGames();
  

  return (
    <Style.Homepage>
      <ReturnPage Route={() => navigate("/profiles")} />

      <CreateGamesAdmin />

      <Style.CardSection>
          {/* {const gameFav = favoriteGames.filter(games => games.favoriteGames.games)} */}
      </Style.CardSection>

      <Style.InfoSection>
        <Style.InfoCard onClick={() => navigate(`/profile/homepage/list/${id}`)}>
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
