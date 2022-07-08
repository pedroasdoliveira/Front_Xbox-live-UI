import styled, { css } from "styled-components";

export const ContainerOption = styled.div`
    ${() => css`
        display: flex;
        align-items: center;
        width: fit-content;
        padding: 0 1rem 0 2rem;
        position: relative;
        left: 75%;
        top: -1rem;
    `}
`;

export const OptionSelect = styled.select`
    ${() => css`
        width: 140px;
        height: auto;
        text-align: center;
        font-size: 1.2rem;
        color: #f4f5f9;
        background-color: transparent;
        border: 2px solid #f4f5f9;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        appearance: none;
        cursor: pointer;
    `}
`;

export const Options = styled.option`
    ${() => css`
        background-color: rgba(0, 0, 0, .9);
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
`
