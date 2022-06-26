import styled, {css} from "styled-components";

export const Home = styled.main`
    ${({theme}) => css`
        background-image: ${theme.constants.xboxBackground};
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        display: grid;
    `}
`;

export const HomeTitle = styled.h1`
    ${({theme}) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: ${theme.colors.titleColor};
        ${theme.mixins.logoStyle};
    `}
`;

export const HomeSection = styled.section`
    ${() => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 1.5rem;
    `}
`

export const HomeDescription = styled.p`
    ${({theme}) => css`
        font-style: oblique;
        ${theme.mixins.bodyStyle}
    `}
`