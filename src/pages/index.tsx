import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

// Components
import { Heading } from '../components/Heading'
import { Box } from '../components/Box'
import { theme } from '../styles/theme'
import Logo from '../../static/assets/marktguru_guru_large_white.svg'
import LogoTypo from '../../static/assets/marktguru_typo_large_white.svg'

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
            }
        }
    }
}

const Index: FunctionComponent<IndexPageProps> = ({ data }) => {
    const { site } = data

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={theme.space.m}
            background="#08aae7"
            width="100%"
            height="100vh"
        >
            <Box marginBottom={theme.space.m}>
                <Logo />
            </Box>
            <LogoTypo />
            <Heading title={site.siteMetadata.title} subtitle={site.siteMetadata.description} />
        </Box>
    )
}

export const indexPageQuery = graphql`
    query IndexPageQuery {
        image: file(relativePath: { eq: "icon.png" }) {
            ...fluidImage
        }
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

export default Index
