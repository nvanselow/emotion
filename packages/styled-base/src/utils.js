// @flow
import * as React from 'react'
import isPropValid from '@emotion/is-prop-valid'

export type Interpolations = Array<any>

export const testOmitPropsOnStringTag: (key: string) => boolean = isPropValid
export const testOmitPropsOnComponent = (key: string) =>
  key !== 'theme' && key !== 'innerRef'

export type StyledOptions = {
  label?: string,
  shouldForwardProp?: string => boolean,
  target?: string
}

type CreateStyledComponent = (...args: Interpolations) => *

type BaseCreateStyled = (
  tag: React.ElementType,
  options?: StyledOptions
) => CreateStyledComponent

export type CreateStyled = BaseCreateStyled & {
  [key: string]: CreateStyledComponent
}
