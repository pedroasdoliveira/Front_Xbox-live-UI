import XboxBackground from 'assets/img/xbox-live-background.jpg'
import XboxWallpaper from 'assets/img/xbox-wallpaper.png'
import BackIcon from 'assets/icon/Voltar.svg'
import coolBackground from 'assets/img/cool-background.png'
import AddGames from 'assets/icon/add_game.svg'
import Category from 'assets/icon/category.svg'
import Standard from 'assets/img/standard.png'

export const constants = {
    logoFontFamily: 'Roboto, sans-serif',
    logoFontSize: '2rem',
    logoLineHeight: '140%',

    subTitleFontFamily: 'Roboto Mono, monospace, sans-serif',
    subTitleFontSize: '1.6rem',
    subTitleFontHeight: '140%',

    bodyFontFamily: 'Share Tech Mono, monospace',
    bodyFontSize: '1rem',
    bodyLineHeight: '140%',

    xboxBackground: `url(${XboxBackground})`,
    xboxWallpaper: `url(${XboxWallpaper})`,
    xboxPlayGameBackground: `url(${Standard})`,
    backIcon: `url(${BackIcon})`,

    homepageBackground: `url(${coolBackground})`,
    createGamesIcon: `url(${AddGames})`,
    createGenresIcon: `url(${Category})`,

    transitionEvents: 'all ease-in-out .6s',
    transformeScale: 'scale(1.2)'
}