import styled, { css } from "styled-components";

export const Background = styled.main`
  ${({ theme }) => css`
      ${theme.mixins.BackgroundProfiles}
  `}
`;

export const Img = styled.img`
  ${() => css`
    width: 206px;
    height: 206px;
    border: 1px solid #0d1522;
    border-radius: 50%;
    cursor: pointer;
  `}
`;

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const InputCreate = styled.input`
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

export const CreateProfileBtn = styled.button`
    ${({theme}) => css`
        ${theme.mixins.loginButton}
        color: #000;
    `}
`
