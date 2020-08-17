import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

// Components
import { Image } from '../../components/Image'
import { Heading } from '../../components/Heading'
import { Box } from '../../components/Box'

interface IndexPageProps {
    data: {
        image: {
            childImageSharp: {
                fluid: any
            }
        }
        site: {
            siteMetadata: {
                title: string
                description: string
            }
        }
    }
}

const PageNotFound: FunctionComponent<IndexPageProps> = ({ data }) => {
    const { image, site } = data

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="20px"
            width="100%"
            height="100vh"
            background="rgb(0. 53, 128)"
        >
            <Image img={image.childImageSharp} />
            <Heading title="404 Page not found!" subtitle={site.siteMetadata.description} />
        </Box>
    )
}

export const NotFoundQuery = graphql`
    query NotFoundPageQuery {
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

export default PageNotFound
