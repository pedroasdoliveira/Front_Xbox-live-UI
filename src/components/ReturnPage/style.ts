import styled, {css} from "styled-components";

export const BackIcon = styled.i`
    ${({theme}) => css`
        ${theme.mixins.BackIcon}
    `}
`;