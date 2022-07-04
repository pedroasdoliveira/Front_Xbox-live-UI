import styled, {css} from "styled-components";

export const GamesList = styled.main`
    ${({theme}) => css`
        display: grid;
        justify-items: center;
        background-image: ${theme.constants.homepageBackground};
        background-repeat: no-repeat;
        background-size: cover;
        filter: grayscale(50%);
        min-width: 100vw;
        min-height: 100vh;
        cursor: default;
        ${theme.mixins.bodyStyle}
    `}
`;

export const BackIcon = styled.i`
    ${({theme}) => css`
        ${theme.mixins.BackIcon}
    `}
`;

export const ListSection = styled.section`
    ${({theme}) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 2rem;
        padding: 2rem;
        border: 2px solid #000
    `}
`;