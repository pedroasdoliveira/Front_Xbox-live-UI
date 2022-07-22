import styled, { css } from "styled-components";

export const SectionItemsDiv = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 365px;
  `}
`;

export const SepareItems = styled.div`
  ${() => css`
    display: flex;
    gap: 1rem;
    margin: 0 0.6rem;
  `}
`;

export const CreateGenrerIcon = styled.i`
  ${({ theme }) => css`
    background-image: ${theme.constants.createGenresIcon};
    background-repeat: no-repeat;
    color: #f4f5f9;
    width: 62px;
    height: 62px;
    cursor: pointer;
  `}
`;
