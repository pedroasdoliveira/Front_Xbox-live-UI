import * as Style from './style'
import { MdFavoriteBorder } from 'react-icons/md'
import { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
    Route: () => void;
    Favorite: () => void;
}

const CardGames = (props: CardProps) => {
  return (
    <Style.Card>
        <Style.IconContainer>
            <Style.Icon onClick={props.Favorite}><MdFavoriteBorder /></Style.Icon>
        </Style.IconContainer>

        <Style.TitleGame>{props.title}</Style.TitleGame>

        <Style.ContentCard onClick={props.Route}>{props.children}</Style.ContentCard>
    </Style.Card>
  )
}

export default CardGames