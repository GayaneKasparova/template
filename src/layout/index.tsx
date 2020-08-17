import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyles'

import { Head } from '../components/Head'
import { Box } from '../components/Box'

interface LayoutProps {
    children: any
    location: {
        pathname: string
    }
}

const Layout: FunctionComponent<LayoutProps> = ({ children, location }) => {
    return (
        <Box display="flex">
            <GlobalStyle />
            <Head pathname={location.pathname} />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Box>
    )
}

export default Layout
