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
`;

const loginButton = () => css`
    width: 175px;
    height: 45px;
    border: transparent;
    border-radius: 15px;
    background-color: #005DA6;
    color: #f4f5f9;
    box-shadow: 4px 4px 10px 1.5px rgba(0, 0, 0, 0.25);
    font-family: ${constants.bodyFontFamily};
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem auto;
    cursor: pointer;
    transition: all ease-in-out .6s;
    :hover {
        transform: scale(1.1);

    }
`

export const mixins = {
    logoStyle,
    subTitleStyle,
    bodyStyle,
    loginButton,
}