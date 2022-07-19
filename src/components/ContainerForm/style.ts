import styled, { css } from "styled-components";

export const ContainerForm = styled.section`
  ${({ theme }) => css`
    width: 625px;
    height: auto;
    padding: 1rem;
    background-color: rgba(255, 255, 255, .6);
    border-radius: 15px;
  `}
`;

export const DivContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.8rem auto;
  `}
`;