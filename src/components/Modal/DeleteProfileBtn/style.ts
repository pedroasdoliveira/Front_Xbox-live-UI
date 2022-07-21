import styled, { css } from "styled-components";

export const DeleteProfileBtn = styled.button`
  ${({theme}) => css`
    ${theme.mixins.DeleteButton}
    color: #000;
  `}
`