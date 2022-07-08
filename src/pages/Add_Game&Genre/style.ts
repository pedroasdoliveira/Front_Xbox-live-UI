import styled, {css} from "styled-components";

export const Page = styled.main`
    ${({theme}) => css`
        background-image: ${theme.constants.homepageBackground};
        background-repeat: no-repeat;
        background-size: cover;
        filter: grayscale(50%);
        min-width: 100vw;
        min-height: 100vh;
        cursor: default;
        ::selection {
            background: transparent;
            color: ${theme.colors.textColor};
        }
    `}
`;

export const BackIcon = styled.i`
    ${({theme}) => css`
        ${theme.mixins.BackIcon}
    `}
`