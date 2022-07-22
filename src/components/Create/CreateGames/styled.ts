import styled, { css } from "styled-components";

export const SectionItemsDiv = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 275px;
  `}
`;

export const SepareItems = styled.div`
  ${() => css`
    display: flex;
    gap: 1rem;
    margin: 0 0.6rem;
  `}
`;

export const CreateGameIcon = styled.i`
  ${({ theme }) => css`
    background-image: ${theme.constants.createGamesIcon};
    background-repeat: no-repeat;
    width: 55px;
    height: 55px;
    cursor: pointer;
  `}
`;
