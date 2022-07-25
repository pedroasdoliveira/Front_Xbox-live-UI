import styled, { css } from "styled-components";

export const MainPage = styled.main`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle}
    background-image: ${theme.constants.xboxPlayGameBackground};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${theme.colors.primaryBgColor};
    min-width: 100vw;
    min-height: 100vh;
    cursor: default;
    display: grid;
    justify-items: center;
  `}
`;

export const Header = styled.header`
  ${() => css`
    display: flex;
    justify-content: center;
    width: 85%;
    height: 85px;
  `}
`;

export const ContainerInfos = styled.div`
  ${() => css`
    display: grid;
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    width: 100%;
  `}
`;

export const PlayGame = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle}
    font-weight: bold;
    color: #f4f5f9;
    cursor: pointer;
  `}
`;

export const TitleGame = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.subTitleStyle}
    font-size: 1.35rem;
    color: #f4f5f9;
  `}
`;

export const ScoreGame = styled.p`
  ${() => css`
    font-size: 1.35;
    text-align: center;
    color: #f4f5f9;
  `}
`;

export const FavoriteIcon = styled.i`
  ${() => css`
    font-size: 2.5rem;
    color: #b8000c;
    cursor: pointer;
    transition: all ease-in-out 0.4s;
    :hover {
      transform: scale(1.2);
    }
  `}
`;

export const DivMethods = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0 2rem;
  `}
`;

export const DeleteGame = styled.i`
  ${({ theme }) => css`
    font-size: 2.5rem;
    color: #f4f5f9;
    cursor: pointer;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;

export const EditGame = styled.img`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;

export const GameDescriptionFooter = styled.footer`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: auto;
    background: #00000075;
    margin: 3rem auto;
  `}
`;

export const GameDescription = styled.p`
  ${() => css`
    font-size: 1.2rem;
    text-align: center;
    color: #f4f5f9;
  `}
`;
