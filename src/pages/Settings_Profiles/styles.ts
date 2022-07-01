import styled, { css } from "styled-components";

export const Background = styled.main`
  ${({ theme }) => css`
    background-image: ${theme.constants.xboxWallpaper};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: default;
  `}
`;

export const BackIcon = styled.i`
  ${({ theme }) => css`
    ${theme.mixins.BackIcon}
  `}
`;

export const EditContainer = styled.section`
  ${({ theme }) => css`
    width: 625px;
    height: auto;
    padding: 1rem;
    background-color: ${theme.colors.secondBgColor};
    opacity: 60%;
    border-radius: 15px;
  `}
`;

export const EditDivImg = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.8rem auto;
  `}
`;

export const EditImg = styled.img`
  ${() => css`
    width: 206px;
    height: 206px;
    border: 1px solid #0d1522;
    border-radius: 50%;
    cursor: pointer;
  `}
`;

export const EditForm = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const EditChangeImg = styled.button`
    ${({theme}) => css`
        ${theme.mixins.loginButton}
        background-color: #03BF84;
        color: #000;
        width: 250px;
    `}
`;

export const EditChangeName = styled.input`
    ${({theme}) => css`
        width: 395px;
        height: 40px;
        border-radius: 15px;
        border-color: #000;
        outline: none;
        margin: 1rem auto;
        box-shadow: 0 4px rgba(0, 0, 0, .4);
        ${theme.mixins.bodyStyle}
    `}
`;

export const EditButton = styled.button`
    ${({theme}) => css`
        ${theme.mixins.loginButton}
        color: #000;
    `}
`
