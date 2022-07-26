import styled, { css } from "styled-components";

export const Page = styled.main`
  ${({ theme }) => css`
    ${theme.mixins.BackgroundProfiles}
  `}
`;

export const Info = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.subTitleStyle}
  `}
`;

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
  `}
`;

export const Inputs = styled.input`
  ${({ theme }) => css`
    width: 395px;
    height: 40px;
    border-radius: 15px;
    border-color: #000;
    outline: none;
    margin: 0.6rem auto;
    box-shadow: 0 4px rgba(0, 0, 0, 0.4);
    ${theme.mixins.bodyStyle}
  `}
`;
