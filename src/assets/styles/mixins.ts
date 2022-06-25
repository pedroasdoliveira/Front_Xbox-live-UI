import { css } from 'styled-components'
import { constants } from './constants'

const logoStyle = () => css`
    font-family: ${constants.logoFontFamily};
    font-size: ${constants.logoFontSize};
    line-height: ${constants.logoLineHeight};
`;

const subTitleStyle = () => css`
    font-family: ${constants.subTitleFontFamily};
    font-size: ${constants.subTitleFontSize};
    line-height: ${constants.subTitleFontHeight};
`;

const bodyStyle = () => css`
    font-family: ${constants.bodyFontFamily};
    font-size: ${constants.bodyFontSize};
    line-height: ${constants.bodyLineHeight};
`

export const mixins = {
    logoStyle,
    subTitleStyle,
    bodyStyle,
}