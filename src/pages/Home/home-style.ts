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
        color: ${theme.colors.primaryBgColor};
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
        color: ${theme.colors.titleColor};
    `}
`

export const IconLog = styled.i`
    ${({theme}) => css`
        font-size: 3rem;
        color: ${theme.colors.primaryBgColor};
        margin: 2rem auto;
        cursor: pointer;
        transition: all ease-in-out .6s;
        :hover {
            transform: scale(1.2);
        }
    `}
`