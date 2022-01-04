export enum Positions {
  TopLeft = 'topLeft',
  TopCenter = 'topCenter',
  TopRight = 'topRight',
  MiddleLeft = 'middleLeft',
  MiddleCenter = 'middleCenter',
  MiddleRight = 'middleRight',
  BottomLeft = 'bottomLeft',
  BottomCenter = 'bottomCenter',
  BottomRight = 'bottomRight',
}

export enum PopperPlacements {
  Top = 'top',
  Bottom = 'bottom',
  Right = 'right',
  Left = 'left',
  TopEnd = 'top-end',
  BottomEnd = 'bottom-end',
  TopStart = 'top-start',
  BottomStart = 'bottom-start',
  RightStart = 'right-start',
  LeftStart = 'left-start',
}

export enum PopperCardinalPlacements {
  Top = 'top',
  Bottom = 'bottom',
  Right = 'right',
  Left = 'left',
}

export const isRTL = () => document.documentElement.dir === 'rtl'
