import * as Style from './style'

interface Props {
    imageGame: string | undefined;
    gameTrailer: string | undefined;
    gameplayGame: string | undefined;
}

const GameInfos = ({imageGame, gameTrailer, gameplayGame}: Props) => {
  return (
    <Style.InfoContainer>
        <Style.CoverImageGame src={imageGame} />

        <Style.ContainerIframes>
            <Style.IframeContent src={gameTrailer} loading='lazy'></Style.IframeContent>
            <Style.IframeContent src={gameplayGame} loading='eager'></Style.IframeContent>
        </Style.ContainerIframes>
    </Style.InfoContainer>
  )
}

export default GameInfos