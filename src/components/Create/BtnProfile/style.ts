import styled, { css } from "styled-components";

export const CreateProfile = styled.img`
  ${({ theme }) => css`
    width: 65px;
    height: 65px;
    cursor: pointer;
    position: relative;
    left: 5rem;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;
