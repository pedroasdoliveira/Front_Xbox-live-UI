import styled, {css} from "styled-components";

export const Home = styled.section`
    ${({theme}) => css`
        background-color: ${theme.colors.primaryBgColor};
        width: 100vw;
        height: 100vh;
        color: ${theme.colors.textColor};
        display: grid;
        justify-content: center;
        align-content: center;
        grid-auto-rows: 5rem;
    `}
`;

export const HomeMain = styled.main`
    ${() => css`
        
    `}
`