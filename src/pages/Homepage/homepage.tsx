import CreateGamesAdmin from "components/Create/CreateGames";
import ReturnPage from "components/ReturnPage";
import { Games } from "Mocks/Games";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomepageTypes } from "types/interfaces";
import * as Style from "./homepage-style";

const Homepage = () => {
  const navigate = useNavigate();

  const [favoriteGames, setFavoriteGames] = useState<HomepageTypes[]>([])

  return (
    <Style.Homepage>
      <ReturnPage Route={() => navigate("/profiles")} />

      <CreateGamesAdmin />

      <Style.CardSection>
        {Games.map((game) => (
          <Style.CardGame key={game.id}>
            <Style.TitleGame>{game.title}</Style.TitleGame>
            <Style.ScoreGame>{game.imbScore}</Style.ScoreGame>
          </Style.CardGame>
        ))}
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
