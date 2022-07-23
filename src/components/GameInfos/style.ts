import styled, { css } from "styled-components";

export const InfoContainer = styled.section`
    ${() => css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;
        height: auto;
    `}
`;

export const CoverImageGame = styled.img`
  ${() => css`
    width: 320px;
    height: 400px;
    margin: 1rem auto;
    border-radius: 10px;
  `}
`;

export const ContainerIframes = styled.div`
    ${() => css`
        display: flex;
        align-content: center;
        justify-content: space-around;
        flex-direction: row;
        width: 100Vw;
    `}
`;

export const IframeContent = styled.iframe`
    ${() => css`
        width: 100%;
        height: 450px;
        border: 1px solid #000;
        margin: 1rem;
    `}
`

