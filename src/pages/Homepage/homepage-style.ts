import styled, {css} from "styled-components";

export const Homepage = styled.main`
    ${({theme}) => css`
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

export const BackIcon = styled.i`
    ${({theme}) => css`
        ${theme.mixins.BackIcon}
    `}
`;

export const CardSection = styled.section`
    ${({theme}) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
        height: auto;
        border: 2px solid #000;
    `}
`;

export const CardGame = styled.div`
    ${({theme}) => css`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 285px;
        height: auto;
        margin: 1.25rem;
        border: 2px solid #000;
        ${theme.mixins.bodyStyle}
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
        border: 2px solid #000;
    `}
`;

export const InfoCard = styled.div`
    ${({theme}) => css`
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
