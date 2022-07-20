import styled, { css } from "styled-components";
import { Games } from "Mocks/Games";

export const imgUrl = Games.map((games) => games.coverImageUrl);

console.log(imgUrl);

export const Homepage = styled.main`
  ${({ theme }) => css`
    background-image: ${theme.constants.homepageBackground};
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(50%);
    min-width: 100vw;
    min-height: 100vh;
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: default;
  `}
`;

export const CardSection = styled.section`
  ${({ theme }) => css`
    display: grid;
    justify-self: center;
    justify-items: center;
    align-self: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    width: 100%;

    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: auto; */
  `}
`;

export const CardGame = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 285px;
    height: 350px;
    margin: 1.25rem;
    border: 2px solid #000;
    border-radius: 10px;
    ${theme.mixins.bodyStyle}
    opacity: 85%;
    background-image: url("https://upload.wikimedia.org/wikipedia/pt/d/d1/Halo_Infinite_capa.png");
    background-size: cover;
    background-repeat: no-repeat;
  `}
`;

export const TitleGame = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.subTitleStyle}
    font-size: 1rem;
    line-height: 1.25rem;
    color: #f4f5f9;
    display: flex;
    justify-content: center;
    align-items: center;
    ::selection {
      background: transparent;
      color: ${theme.colors.textColor};
    }
  `}
`;

export const ScoreGame = styled.p`
  ${() => css`
    position: relative;
    top: 100px;
    left: 50%;
    width: fit-content;
    font-size: 2rem;
    color: #f4f5f9;
  `}
`;

export const InfoSection = styled.section`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: auto;
    margin-top: 1rem;
  `}
`;

export const InfoCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 300px;
    height: auto;
    margin: 1rem;
    border: 2px solid #000;
    cursor: pointer;
    ${theme.mixins.bodyStyle}
  `}
`;
