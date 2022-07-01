import styled, { css } from "styled-components";

export const Background = styled.main`
  ${({ theme }) => css`
    background-image: ${theme.constants.xboxWallpaper};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: default;
  `}
`;

export const BackIcon = styled.i`
  ${({theme}) => css`
    ${theme.mixins.BackIcon}
  `}
`;

export const ProfileSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 206px;
    height: 206px;
  `}
`;

export const ProfileDiv = styled.div`
  ${() => css`
    margin: auto 3.5rem;
  `}
`;

export const Profileimg = styled.img`
  ${({ theme }) => css`
    opacity: 0.9;
    border: 2px solid #0d1522;
    border-radius: 50%;
    cursor: pointer;
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
