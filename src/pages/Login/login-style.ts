import styled, { css } from "styled-components";

export const Login = styled.section`
    ${({theme}) => css`
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

export const LoginLogo = styled.img`
    ${() => css`
        width: 125px;
        height: auto;
        margin-bottom: 2rem;
        text-align: center;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
        position: relative;
        left: 235px;
    `}
`

export const LoginSection = styled.section`
    ${({theme}) => css`
        padding: 1.25rem;
        width: 600px;
        height: auto;
        background-color: ${theme.colors.secondBgColor};
        border-radius: 15px;
    `}
`;

export const LoginImg = styled.img`
    ${() => css`
        width: 85px;
        height: auto;
        padding-bottom: 1rem;
    `}
`;

export const LoginContent = styled.form`
    ${() => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;

export const LoginInput = styled.input`
    ${({theme}) => css`
        width: 395px;
        height: 40px;
        border-radius: 15px;
        border-color: #000;
        outline: none;
        margin-bottom: 1rem;
        box-shadow: 0 4px rgba(0, 0, 0, .4);
        ${theme.mixins.bodyStyle}
    `}
`

export const LoginDescription = styled.p`
    ${({theme}) => css`
        padding: 1rem;
        ${theme.mixins.bodyStyle}
    `}
`;

export const LoginStrong = styled.strong`
    ${() => css`
        color: #005DA6;
        cursor: pointer;
        transition: all ease-in-out .3s;
        :hover {
            color: #107C10;
        }
    `}
`

export const LoginButton = styled.button`
    ${({theme}) => css`
        ${theme.mixins.loginButton}
    `}
`