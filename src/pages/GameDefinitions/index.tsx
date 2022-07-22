import ReturnPage from 'components/ReturnPage'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetGames } from 'Service/gamesService'
import { GamesTypes } from 'types/interfaces'
import * as Style from './style'

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
            console.log(payloadGameId?.data)
            setGameId(payloadGameId?.data);
        }
    }

  return (
    <Style.MainPage>
        <ReturnPage Route={() => navigate(-1)}/>
    </Style.MainPage>
  )
}

export default GameDefinitions