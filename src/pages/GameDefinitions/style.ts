import styled, { css } from "styled-components";

export const MainPage = styled.main`
    ${({theme}) => css`
        ${theme.mixins.bodyStyle}
        background-image: ${theme.constants.xboxPlayGameBackground};
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 100vw;
        min-height: 100vh;
        cursor: default;
        display: grid;
        justify-items: center;
    `}
`;

