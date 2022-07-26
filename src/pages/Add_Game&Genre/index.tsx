import ContainerForm from "components/ContainerForm";
import ReturnPage from "components/ReturnPage";
import swal from "sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { CreateGameType } from "types/interfaces";
import * as Style from "./style";

const CrudGamesGenrer = () => {
  const navigate = useNavigate();

  const [game, setGame] = useState<CreateGameType>({
    title: "",
    coverImageUrl: "",
    description: "",
    year: 0,
    imbScore: 0,
    gameplayYouTubeUrl: "",
    trailerYoutubeUrl: "",
    genreGame: "",
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "year" || e.target.name === "imbScore") {
      setGame((value: CreateGameType) => ({
        ...value,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setGame((value: CreateGameType) => ({
        ...value,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleCreateGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadGame = await GetGames.CreateGame(game);

    if (payloadGame) {
      swal({
        title: "Jogo cadastrado com sucesso!",
        icon: "success",
        timer: 6000,
      });
      console.log(payloadGame.data);
    } else {
      swal({
        title: "Error ao cadastrar o jogo",
        icon: "error",
        timer: 6000,
      });
      console.log(payloadGame);
    }
  };

  return (
    <Style.Page>
      <ReturnPage Route={() => navigate(-1)} />

      <ContainerForm>
        <Style.CoverImgGame
          src={game.coverImageUrl ? game.coverImageUrl : ""}
        />

        <Style.Form onSubmit={handleCreateGame}>
          <Style.InputCreate
            type="text"
            placeholder="Coloque o nome do jogo (de preferencia sem ser exclusivo)"
            name="title"
            id="title"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Url da capa do jogo (1920X1080)"
            name="coverImageUrl"
            id="coverImageUrl"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Descrição breve sobre o jogo"
            name="description"
            id="description"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="number"
            placeholder="Ano de lançamento"
            name="year"
            id="year"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="number"
            placeholder="ImbScore do jogo (de 0 a 5)"
            name="imbScore"
            id="imbScore"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Url do trailer do jogo"
            name="trailerYoutubeUrl"
            id="trailerYoutubeUrl"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Url de gameplay"
            name="gameplayYouTubeUrl"
            id="gameplayYouTubeUrl"
            onChange={handleValues}
            required
          />

          <Style.InputCreate
            type="text"
            placeholder="Tipo de gênero/categoria do jogo"
            name="genreGame"
            id="genreGame"
            onChange={handleValues}
            required
          />

          <Style.CreateBtn type="submit">Cadastrar jogo</Style.CreateBtn>
        </Style.Form>
      </ContainerForm>
    </Style.Page>
  );
};

export default CrudGamesGenrer;
