import { useNavigate } from "react-router-dom";
import * as Style from "./homepage-style";
import { imgUrl } from "./homepage-style";
import { Games } from "Mocks/Games";
import { useState } from "react";

// interface GamesProps {
//   id: number;
//   title: string;
//   coverImageUrl: string;
//   description: string;
//   year: number;
//   imbScore: number;
//   trailerYoutubeUrl: string;
//   gameplayYouTubeUrl: string;
// }

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Style.Homepage>
      <Style.BackIcon onClick={() => navigate("/profiles")} />

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
