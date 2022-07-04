import styled, {css} from "styled-components";

export const Background = styled.main`
    ${({theme}) => css`
        ${theme.mixins.BackgroundProfiles}
    `}
`;

export const BackIcon = styled.i`
    ${({theme}) => css`
        ${theme.mixins.BackIcon}
    `}
`

export const CreateContainer = styled.section`
    ${({theme}) => css`
        ${theme.mixins.ContainerCardProfile}
    `}
`;