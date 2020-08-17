import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Box } from './Box'

interface ImageProps {
    img: {
        fluid: any
    }
}

export const Image: FunctionComponent<ImageProps> = ({ img }) => (
    <Box display="flex">
        <StyledImage fluid={img.fluid} />
    </Box>
)

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const StyledImage = styled(Img)`
    width: 200px;
`
