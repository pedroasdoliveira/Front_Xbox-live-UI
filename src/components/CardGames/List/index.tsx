import * as Style from './style'
import { MdFavoriteBorder } from 'react-icons/md'
import { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
}

const CardGames = (props: CardProps) => {
  return (
    <Style.Card>
        <Style.IconContainer>
            <MdFavoriteBorder />
        </Style.IconContainer>

        <Style.TitleGame>{props.title}</Style.TitleGame>

        <Style.ContentCard>{props.children}</Style.ContentCard>
    </Style.Card>
  )
}

export default CardGames