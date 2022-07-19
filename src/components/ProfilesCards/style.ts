import styled, { css } from "styled-components";

export const ProfileDiv = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    margin: auto 3.5rem;
  `}
`;

export const Profileimg = styled.img`
  ${({ theme }) => css`
    opacity: 0.9;
    border: 1px solid #0d1522;
    border-radius: 50%;
    cursor: pointer;
    width: 200px;
    height: 200px;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;

export const ProfileDescription = styled.p`
  ${({ theme }) => css`
    text-align: center;
    padding-top: 0.6rem;
    padding-bottom: .6rem;
    ${theme.mixins.bodyStyle}
    font-size: 1.5rem;
  `}
`;

export const ProfileEdit = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    margin-left: 5.5rem;
    cursor: pointer;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;
