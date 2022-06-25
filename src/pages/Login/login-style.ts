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
    `}
`;

export const LoginSection = styled.section`
    ${() => css`
        padding: 1.25rem;
        width: 600px;
        height: 400px;
        background-color: #f4f5f9;
        border-radius: 15px;
    `}
`;

export const LoginImg = styled.img`
    ${() => css`
        width: 85px;
        height: auto;
        padding-bottom: 1rem;
    `}
`

export const LoginContent = styled.form`
    ${({theme}) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`