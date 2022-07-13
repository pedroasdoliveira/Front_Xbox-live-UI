import styled, { css } from "styled-components";

export const Card = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border: 1px solid #f4f5f9;
        background-color: transparent;
    `}
`;

export const IconContainer = styled.div`
    ${() => css`
        display: flex;
        justify-content: flex-end;
        margin-right: .5rem;
        font-size: 2rem;
        color: #B8000C;
    `}
`;

export const TitleGame = styled.h2`
    ${({theme}) => css`
        ${theme.mixins.subTitleStyle}
        color: #f4f5f9;
        text-align: center;
        margin-bottom: .6rem;
    `}
`;

export const ContentCard = styled.div`
    ${({theme}) => css`
        ${theme.mixins.bodyStyle}
        color: #f4f5f9;
        line-height: 1.5rem;
        margin: .5rem auto;

        p {
            line-height: 1.75rem;
            margin: .3rem auto;
        }
    `}
`