import styled, { css } from "styled-components";

export const Card = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color: transparent;
    `}
`;

export const IconContainer = styled.div`
    ${() => css`
        display: flex;
        justify-content: flex-end;
        margin-right: 1rem;
        margin-top: .5rem;
        font-size: 3rem;
        color: #B8000C;
    `}
`;

export const Icon = styled.i`
    ${() => css`
        cursor: pointer;
        transition: all ease-in-out .4s;
        :hover {
            transform: scale(1.2);
        }
    `}
`

export const TitleGame = styled.h2`
    ${({theme}) => css`
        ${theme.mixins.subTitleStyle}
        color: #f4f5f9;
        text-align: center;
    `}
`;

export const ContentCard = styled.div`
    ${({theme}) => css`
        ${theme.mixins.bodyStyle}
        color: #f4f5f9;
        line-height: 1.5rem;
        margin: .5rem auto;
        cursor: pointer;
        p {
            line-height: 1.75rem;
            text-align: center;
            margin: .6rem auto;
        }
        
    `}
`