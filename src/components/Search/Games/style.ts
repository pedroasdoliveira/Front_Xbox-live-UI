import styled, { css } from "styled-components";

export const Search = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 650px;
    height: 35px;
    border-radius: 15px;
    border: transparent;
    outline: none;
    opacity: 65%;
    color: #000;
    ${theme.mixins.bodyStyle}
  `}
`;

export const SearchIcon = styled.i`
  ${() => css`
    font-size: 2rem;
    margin: 0 0.6rem;
    color: #f4f5f9;
    cursor: pointer;
  `}
`;
