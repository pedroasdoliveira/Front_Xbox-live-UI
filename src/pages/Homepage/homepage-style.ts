import styled, {css} from "styled-components";

export const Homepage = styled.main`
    ${({theme}) => css`
        background-image: ${theme.constants.homepageBackground};
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    `}
`;

export const BackIcon = styled.i`
    ${({theme}) => css`
        ${theme.mixins.BackIcon}
    `}
`