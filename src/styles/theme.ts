// The defaultPalette need to be defined before the require
export const defaultPalette = {
    lightGrey: '#efefef',
    darkGrey: '#1c1c1e',
    white: '#ffffff',
    black: '#000000',
}

const baseSpace = 8
export const baseFontSize = 14
const breakpoints = {
    tablet: 768,
    desktop: 970,
}

export const theme = {
    space: {
        xxs: baseSpace * 0.25, // 2px
        xs: baseSpace * 0.5, // 4px
        s: baseSpace, // 8px
        sm: baseSpace * 1.5, // 12px
        m: baseSpace * 2.0, // 16px
        l: baseSpace * 3.0, // 24px
        xl: baseSpace * 4.0, // 32px
        xxl: baseSpace * 5.0, // 40px
        xxxl: baseSpace * 6.0, // 48px
        xxxxl: baseSpace * 7.0, // 56px
        xxxxxl: baseSpace * 8.0, // 64px
    },
    fontSizes: {
        xxxl: `${28 / baseFontSize}rem`,
        xxl: `${24 / baseFontSize}rem`,
        xl: `${18 / baseFontSize}rem`,
        l: `${16 / baseFontSize}rem`,
        m: `${14 / baseFontSize}rem`,
        s: `${12 / baseFontSize}rem`,
        xs: `${10 / baseFontSize}rem`,
    },
    borderRadius: 4,
    media: {
        tablet: `@media only screen and (min-width: ${breakpoints.tablet}px), print`,
        desktop: `@media only screen and (min-width: ${breakpoints.desktop}px), print`,
        print: `@media print`,
        only: {
            phone: `@media only screen and (max-width: ${breakpoints.tablet - 1}px)`,
            tablet: `@media only screen and (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
        },
    },
    zIndices: {
        alwaysOnTop: 99999999,
        spinner: 999999999,
    },
    colors: {
        ...defaultPalette,
    },
}
