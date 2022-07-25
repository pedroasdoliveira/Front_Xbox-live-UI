import ReturnPage from 'components/ReturnPage'
import Edit from "assets/icon/edit_profile.svg";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetGames } from 'Service/gamesService'
import { GamesTypes } from 'types/interfaces'
import ReactStars from 'react-stars'
import { MdFavoriteBorder } from 'react-icons/md'
import * as Style from './style'
import GameInfos from 'components/GameInfos';

const GameDefinitions = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [gameId, setGameId] = useState<GamesTypes>();

    useEffect(() => {
        GetGameId()
    }, []);

    const GetGameId = async () => {
        if (id) {
            const payloadGameId = await GetGames.GameById(id)
            setGameId(payloadGameId?.data);
        }
    }

  return (
    <Style.MainPage>
        <ReturnPage Route={() => navigate(-1)}/>
        
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
                        color2={'#ffd700'}
                    />
                </Style.ScoreGame>

                <Style.FavoriteIcon>
                    <MdFavoriteBorder />
                </Style.FavoriteIcon>

                <Style.EditGame src={Edit} onClick={() => navigate(`/profile/game/edit/${id}`)}/>
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
  )
}

export default GameDefinitions