import ReturnPage from "components/ReturnPage";
import Edit from "assets/icon/edit_profile.svg";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { GamesTypes } from "types/interfaces";
import ReactStars from "react-stars";
import { MdFavoriteBorder } from "react-icons/md";
import * as Style from "./style";
import swal from "sweetalert";
import GameInfos from "components/GameInfos";

const GameDefinitions = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [gameId, setGameId] = useState<GamesTypes>();

  useEffect(() => {
    GetGameId();
  }, []);

  const GetGameId = async () => {
    if (id) {
      const payloadGameId = await GetGames.GameById(id);
      console.log(payloadGameId?.data)
      setGameId(payloadGameId?.data);
    }
  };

  const modalDeleteGame = () => {
    swal({
        title: 'Deletar jogo!',
        text: `Deseja deletar o jogo ${gameId?.title}?`,
        icon: 'warning',
        buttons: ['Não', 'Sim'],
    })
    .then((res) => {
        if (res) {
            handleDeleteGame();
        }
    }) 
  }

  const handleDeleteGame = async () => {
    if (id) {
      const payloadDeleteGame = await GetGames.DeleteGame(id);

      if (payloadDeleteGame) {
        swal({
          title: "Jogo deletado do catálogo",
          icon: "success",
          timer: 6000,
        });
        navigate(-1);
      } else {
        swal({
          title: "Error",
          text: "Não é possivel deletar o jogo!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  return (
    <Style.MainPage
      style={{
        backgroundImage: `url(${gameId?.coverImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ReturnPage Route={() => navigate(-1)} />

      <Style.Header>
        <Style.ContainerInfos>
          <Style.PlayGame>Jogar</Style.PlayGame>

          <Style.TitleGame>{gameId?.title}</Style.TitleGame>

          <Style.ScoreGame>
            <ReactStars
              count={5}
              value={gameId?.imbScore}
              edit={false}
              size={35}
              color2={"#ffd700"}
            />
          </Style.ScoreGame>

          <Style.FavoriteIcon>
            <MdFavoriteBorder />
          </Style.FavoriteIcon>

          <Style.DivMethods>
            <Style.EditGame
              src={Edit}
              onClick={() => navigate(`/profile/game/edit/${id}`)}
            />
            <Style.DeleteGame>
              <AiOutlineDelete onClick={modalDeleteGame} />
            </Style.DeleteGame>
          </Style.DivMethods>
        </Style.ContainerInfos>
      </Style.Header>

      <GameInfos
        imageGame={gameId?.coverImageUrl}
        gameTrailer={gameId?.trailerYoutubeUrl}
        gameplayGame={gameId?.gameplayYouTubeUrl}
      />

      <Style.GameDescriptionFooter>
        <Style.GameDescription>{gameId?.description}</Style.GameDescription>
      </Style.GameDescriptionFooter>
    </Style.MainPage>
  );
};

export default GameDefinitions;
