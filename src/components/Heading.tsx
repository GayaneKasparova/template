import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Box } from './Box'

interface HeadingProps {
    title: string
    subtitle: string
}

export const Heading: FunctionComponent<HeadingProps> = ({ title, subtitle }) => (
    <Box display="flex" flexDirection="column" textAlign="center" color="white">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Box>
)

const Title = styled.h1`
    margin-top: 30px;
`

const Subtitle = styled.p``
