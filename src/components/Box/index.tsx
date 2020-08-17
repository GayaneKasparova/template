import styled from 'styled-components'
import {
    compose,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    TypographyProps,
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
} from 'styled-system'

export type BoxProps = BackgroundProps &
    BorderProps &
    ColorProps<any> &
    FlexboxProps &
    GridProps &
    LayoutProps &
    PositionProps &
    ShadowProps &
    SpaceProps &
    TypographyProps

export const Box = styled.div<BoxProps>(compose(background, border, color, flexbox, grid, layout, position, shadow, space, typography))
