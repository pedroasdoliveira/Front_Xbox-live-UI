import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

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
  background-color: #005da6;
  color: #f4f5f9;
  box-shadow: 4px 4px 10px 1.5px rgba(0, 0, 0, 0.25);
  font-family: ${constants.bodyFontFamily};
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem auto;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
  :hover {
    transform: scale(1.1);
  }
`;

const DeleteButton = () => css`
  width: 175px;
  height: 45px;
  border: transparent;
  border-radius: 15px;
  background-color: #9D0208;
  color: #f4f5f9;
  box-shadow: 4px 4px 10px 1.5px rgba(0, 0, 0, 0.25);
  font-family: ${constants.bodyFontFamily};
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem auto;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
  :hover {
    transform: scale(1.1);
  }
`

const BackIcon = () => css`
  background-image: ${constants.backIcon};
  background-repeat: no-repeat;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 25px;
  top: 30px;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
  :hover {
    transform: scale(1.2);
  }
`;

const BackgroundProfiles = () => css`
  background-image: ${constants.xboxWallpaper};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
  cursor: default;
`;

const ContainerCardProfile = () => css`
  background-color: ${colors.secondBgColor};
  opacity: 60%;
  border-radius: 15px;
  width: 625px;
  height: auto;
  padding: 1rem;
`;

export const mixins = {
  logoStyle,
  subTitleStyle,
  bodyStyle,
  loginButton,
  DeleteButton,
  BackIcon,
  BackgroundProfiles,
  ContainerCardProfile,
};
