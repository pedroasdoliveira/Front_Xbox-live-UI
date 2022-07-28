import styled, { css } from "styled-components";

export const Singup = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryBgColor};
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: default;
  `}
`;

export const SingupBack = styled.img`
    width: 35px;
    height: 35px;
    position: absolute;
    left: 25px;
    top: 30px;
    cursor: pointer;
    transition: all ease-in-out .6s;
    :hover {
        transform: scale(1.2);
    }
`

export const SingupLogo = styled.img`
  ${() => css`
    width: 125px;
    height: auto;
    margin-bottom: 1rem;
    text-align: center;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  `}
`;

export const SingupSection = styled.section`
  ${({ theme }) => css`
    padding: 1.25rem;
    width: 625px;
    height: auto;
    border-radius: 15px;
    background-color: ${theme.colors.secondBgColor};
  `}
`;

export const SingupH2 = styled.h2`
    ${({theme}) => css`
        text-align: center;
        padding-bottom: 1rem;
        ${theme.mixins.subTitleStyle}
    `}
`

export const SingupForm = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const SingupInput = styled.input`
  ${({ theme }) => css`
    width: 395px;
    height: 40px;
    border-radius: 15px;
    border-color: #000;
    outline: none;
    margin-bottom: 1rem;
    box-shadow: 0 4px rgba(0, 0, 0, 0.4);
    ${theme.mixins.bodyStyle}
  `}
`;

export const SingupButton = styled.button`
    ${({theme}) => css`
        ${theme.mixins.loginButton}
    `}
`