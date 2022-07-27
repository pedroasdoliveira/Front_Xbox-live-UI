import * as Style from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { ReactNode, useState } from 'react';
import { Favorite } from 'Service/favoriteService';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    title: string;
    children: ReactNode;
    Route: () => void;
    idGame: string | undefined;
}

const CardGames = (props: CardProps) => {
  const navigate = useNavigate()

  const [favorite, setFavorite] = useState<string>()

  const favoriteGame = async () => {
    const id = localStorage.getItem('profileId')

    if (id) {
      const favoriteObj = {
        gameId: props.idGame,
        favoriteGameId: props.idGame,
      }

      const payloadFavorite = await Favorite.FavoriteGame(id, favoriteObj);
      console.log(payloadFavorite?.data);
      setFavorite(payloadFavorite?.data);
      navigate(-1)
    }
  }

  return (
    <Style.Card>
        <Style.IconContainer>
            <Style.Icon onClick={favoriteGame}>
              {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </Style.Icon>
        </Style.IconContainer>

        <Style.TitleGame>{props.title}</Style.TitleGame>

        <Style.ContentCard onClick={props.Route}>{props.children}</Style.ContentCard>
    </Style.Card>
  )
}

export default CardGames