import styled, { css } from "styled-components";

export const Page = styled.main`
  ${({ theme }) => css`
    ${theme.mixins.BackgroundProfiles};
    background-image: ${theme.constants.homepageBackground};
    background-repeat: no-repeat;
    background-size: 100%;
    filter: grayscale(50%);
    min-width: 100vw;
    min-height: 100vh;
    cursor: default;
    ::selection {
      background: transparent;
      color: ${theme.colors.textColor};
    }
  `}
`;

export const DivContainers = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2rem;
    align-items: center;
  `}
`;

export const DescriptionForm = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.subTitleStyle}
    margin: 1rem auto;
    ::selection {
      background: transparent;
      color: ${theme.colors.textColor};
    }
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

export const Input = styled.input`
  ${({ theme }) => css`
    width: 395px;
    height: 40px;
    border-radius: 15px;
    border-color: #000;
    outline: none;
    margin: 1rem auto;
    box-shadow: 0 4px rgba(0, 0, 0, 0.4);
    ${theme.mixins.bodyStyle}
  `}
`;

export const BtnCreate = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.loginButton}
    color: #000;
  `}
`;

export const ContainerOption = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 1rem auto;
  `}
`;

export const OptionSelect = styled.select`
  ${() => css`
    width: 260px;
    height: auto;
    text-align: center;
    font-size: 1.2rem;
    color: #f4f5f9;
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(0, 0, 0, 0.6);
    outline: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `}
`;

export const Options = styled.option`
  ${() => css`
    background-color: rgba(0, 0, 0, 0.9);
    color: #f4f5f9;
    font-weight: bold;
  `}
`;

export const GenrerOption = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 75px;
    gap: 75px 20px;
  `}
`;

export const BtnsRequests = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  `}
`;

export const BtnEdit = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.loginButton}
    background-color: ${theme.colors.primaryBgColor};
    color: #000;
  `}
`;

export const BtnDelete = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.DeleteButton}
    color: #000;
  `}
`;
