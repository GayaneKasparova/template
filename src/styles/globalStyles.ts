import { createGlobalStyle } from 'styled-components'
import { theme, baseFontSize } from './theme'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

    html {
        box-sizing: border-box;
        font-size: ${(baseFontSize / 16) * 100}%;
    }

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: inherit;
    }

    a {
        color: ${theme.colors.darkGrey};
        display: inline;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }
`
