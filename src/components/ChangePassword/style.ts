import styled, { css } from "styled-components";

export const BtnPassword = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.DeleteButton}
    background-color: ${theme.colors.primaryBgColor};
    margin-top: 1rem;
    color: #000;
  `}
`;
