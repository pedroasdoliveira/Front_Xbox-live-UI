import styled, { css } from "styled-components";

export const LibraryGames = styled.main`
  ${({ theme }) => css`
    display: grid;
    justify-items: center;
    background-image: ${theme.constants.homepageBackground};
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(50%);
    min-width: 100vw;
    min-height: 100vh;
    cursor: default;
    flex-direction: column;
    ${theme.mixins.bodyStyle}
  `}
`;

export const GamesSection = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 2rem;
    padding: 2rem;
  `}
`;

export const Categorie = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 1rem 0;
  `}
`;

export const SectionSearch = styled.p`
  ${({ theme }) => css`
    ${theme.mixins.subTitleStyle}
    margin: 0 3rem;
    color: #f4f5f9;
    cursor: pointer;
  `}
`;

export const ContainerCard = styled.section`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  `}
`;

export const CoverImageGame = styled.img`
  ${() => css`
    width: 350px;
    height: 400px;
    margin: 0 auto;
    border-radius: 10px;
  `}
`;

export const GenrerGame = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0.5rem;
  `}
`;
