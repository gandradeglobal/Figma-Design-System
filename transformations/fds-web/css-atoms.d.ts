import {
  LIBColorValue,
  LIBTypeValue,
  LIBEffectValue,
  LIBSpacingValue,
} from './css-vars';

export type LIBProp = {
  alignmentCenter?: true,
  alignmentCenterCenter?: true,
  alignmentCenterLeft?: true,
  alignmentLeftCenter?: true,
  alignmentCenterRight?: true,
  alignmentRightCenter?: true,
  alignmentTop?: true,
  alignmentTopLeft?: true,
  alignmentLeftTop?: true,
  alignmentLeft?: true,
  alignmentTopCenter?: true,
  alignmentCenterTop?: true,
  alignmentTopRight?: true,
  alignmentRightTop?: true,
  alignmentRight?: true,
  alignmentBottomLeft?: true,
  alignmentLeftBottom?: true,
  alignmentBottom?: true,
  alignmentBottomCenter?: true,
  alignmentCenterBottom?: true,
  alignmentBottomRight?: true,
  alignmentRightBottom?: true,
  alignmentStretch?: true,
  alignmentStretchLeft?: true,
  alignmentLeftStretch?: true,
  alignmentStretchTop?: true,
  alignmentTopStretch?: true,
  alignmentStretchRight?: true,
  alignmentRightStretch?: true,
  alignmentStretchBottom?: true,
  alignmentBottomStretch?: true,
  alignmentStretchCenter?: true,
  alignmentCenterStretch?: true,
  baseline?: true,
  alignmentBaselineLeft?: true,
  alignmentLeftBaseline?: true,
  alignmentBaselineRight?: true,
  alignmentRightBaseline?: true,
  alignmentBaselineCenter?: true,
  alignmentCenterBaseline?: true,
  backgroundColor?: LIBColorValue,
  backgroundColorHover?: LIBColorValue,
  color?: LIBColorValue,
  colorHover?: LIBColorValue,
  borderColor?: LIBColorValue,
  border?: LIBColorValue,
  borderTop?: LIBColorValue,
  borderBottom?: LIBColorValue,
  borderLeft?: LIBColorValue,
  borderRight?: LIBColorValue,
  font?: LIBTypeValue,
  element?: true,
  layout?: true,
  text?: true,
  stack?: true,
  flexH?: true,
  flexV?: true,
  center?: true,
  float?: true,
  size?: LIBSpacingValue,
  maxSize?: LIBSpacingValue,
  minSize?: LIBSpacingValue,
  width?: LIBSpacingValue,
  maxWidth?: LIBSpacingValue,
  minWidth?: LIBSpacingValue,
  height?: LIBSpacingValue,
  maxHeight?: LIBSpacingValue,
  minHeight?: LIBSpacingValue,
  left?: LIBSpacingValue,
  right?: LIBSpacingValue,
  top?: LIBSpacingValue,
  bottom?: LIBSpacingValue,
  margin?: LIBSpacingValue,
  marginLeft?: LIBSpacingValue,
  marginRight?: LIBSpacingValue,
  marginTop?: LIBSpacingValue,
  marginBottom?: LIBSpacingValue,
  marginWidth?: LIBSpacingValue,
  marginX?: LIBSpacingValue,
  marginHeight?: LIBSpacingValue,
  marginY?: LIBSpacingValue,
  padding?: LIBSpacingValue,
  paddingLeft?: LIBSpacingValue,
  paddingRight?: LIBSpacingValue,
  paddingTop?: LIBSpacingValue,
  paddingBottom?: LIBSpacingValue,
  paddingWidth?: LIBSpacingValue,
  paddingX?: LIBSpacingValue,
  paddingHeight?: LIBSpacingValue,
  paddingY?: LIBSpacingValue,
  borderRadius?: LIBSpacingValue,
  gap?: LIBSpacingValue,
  fill?: LIBSpacingValue,
  shadow?: LIBEffectValue,
  blur?: LIBEffectValue,
}