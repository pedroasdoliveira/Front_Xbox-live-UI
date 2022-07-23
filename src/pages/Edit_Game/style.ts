import styled, { css } from "styled-components";

export const MainPage = styled.main`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle}
    background-image: ${theme.constants.xboxPlayGameBackground};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${theme.colors.primaryBgColor};
    min-width: 100vw;
    min-height: 100vh;
    cursor: default;
    display: grid;
    justify-items: center;
    
  `}
`;