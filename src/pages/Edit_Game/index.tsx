import ContainerForm from "components/ContainerForm";
import ReturnPage from "components/ReturnPage";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import swal from "sweetalert";
import { CreateGameType } from "types/interfaces";
import * as Style from "./style";

const EditGameId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [gameInfo, setGameInfo] = useState<CreateGameType>({
    title: "",
    description: "",
    coverImageUrl: "",
    year: 0,
    imbScore: 0,
    trailerYoutubeUrl: "",
    gameplayYouTubeUrl: "",
    genreGame: "",
  });

  useEffect(() => {
    GameId();
  }, []);

  const GameId = async () => {
    if (id) {
      const payloadId = await GetGames.GameById(id);

      const gameInfosValues = {
        title: payloadId?.data.title,
        description: payloadId?.data.description,
        coverImageUrl: payloadId?.data.coverImageUrl,
        year: payloadId?.data.year,
        imbScore: payloadId?.data.imbScore,
        trailerYoutubeUrl: payloadId?.data.trailerYoutubeUrl,
        gameplayYouTubeUrl: payloadId?.data.gameplayYouTubeUrl,
        genreGame: payloadId?.data.genders[0].name,
      };

      setGameInfo({
        ...gameInfo,
        ...gameInfosValues,
      });
    }
  };

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "year" || e.target.name === "imbScore") {
      setGameInfo((value: CreateGameType) => ({
        ...value,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setGameInfo((value: CreateGameType) => ({
        ...value,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleEditGameInfos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id) {
      const payloadEdit = await GetGames.EditGame(id, gameInfo);

      if (payloadEdit) {
        swal({
          title: "Jogo editado com sucesso!",
          icon: "success",
          timer: 6000,
        });
        navigate(-1);
      } else {
        swal({
          title: "Error",
          text: "Erro ao atualizar o jogo!",
          icon: "error",
          timer: 6000,
        });
        console.error(payloadEdit);
      }
    }
  };

  return (
    <Style.MainPage
      style={{
        backgroundImage: `url(${gameInfo?.coverImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ReturnPage Route={() => navigate(-1)} />

      <ContainerForm>
        <Style.CoverImgGame
          src={gameInfo.coverImageUrl ? gameInfo.coverImageUrl : ""}
        />

        <Style.Form onSubmit={handleEditGameInfos}>
          <Style.Inputs
            type="text"
            placeholder="Nome do jogo"
            name="title"
            id="title"
            value={gameInfo.title}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type="text"
            placeholder="Capa do jogo (1920X1080)"
            name="coverImageUrl"
            id="coverImageUrl"
            value={gameInfo.coverImageUrl}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type="text"
            placeholder="Descrição breve sobre o jogo"
            name="description"
            id="description"
            value={gameInfo.description}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type="number"
            placeholder="Ano do lançamento"
            name="year"
            id="year"
            value={gameInfo.year}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type="number"
            placeholder="Score do jogo (0 até 5)"
            name="imbScore"
            id="imbScore"
            value={gameInfo.imbScore}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type="text"
            placeholder="Trailer do jogo"
            name="trailerYoutubeUrl"
            id="trailerYoutubeUrl"
            value={gameInfo.trailerYoutubeUrl}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type="text"
            placeholder="Gameplay do jogo"
            name="gameplayYouTubeUrl"
            id="gameplayYouTubeUrl"
            value={gameInfo.gameplayYouTubeUrl}
            onChange={handleChangesValues}
            required
          />

          <Style.Inputs
            type="text"
            placeholder="Gênero do jogo"
            name="genreGame"
            id="genreGame"
            value={gameInfo.genreGame}
            onChange={handleChangesValues}
            required
          />

          <Style.EditBtn type="submit">Atualizar</Style.EditBtn>
        </Style.Form>
      </ContainerForm>
    </Style.MainPage>
  );
};

export default EditGameId;
