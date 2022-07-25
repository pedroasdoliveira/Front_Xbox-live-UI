import styled, { css } from "styled-components";

export const GamesList = styled.main`
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

export const ListSection = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 2rem;
    padding: 2rem;
  `}
`;

export const Categories = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 1rem 0;
  `}
`;

export const SectionsSearch = styled.p`
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
    width: 320px;
    height: 400px;
    margin: 0 auto;
    border-radius: 10px;
  `}
`;

export const GenrerGame = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0 .6rem;
    margin-top: .5rem;
  `}
`