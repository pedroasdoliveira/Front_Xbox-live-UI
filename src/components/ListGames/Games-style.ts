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
    ${() => css`
        display: flex;
        justify-content: center;
        width: 90%;
        height: auto;
        margin: 2rem;
        padding: 2rem;
        border: 2px solid #000;
    `}
`;

export const SearchInput = styled.input`
    ${({theme}) => css`
        width: 650px;
        height: 35px;
        border-radius: 15px;
        border: transparent;
        outline: none;
        opacity: 65%;
        color: #000;
        ${theme.mixins.bodyStyle}
    `}
`;

export const SearchIcon = styled.i`
    ${() => css`
        font-size: 2rem;
        margin: 0 .6rem;
        cursor: pointer;
    `}
`