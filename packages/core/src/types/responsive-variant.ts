export enum ResponsiveVariants {
  ExtraSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  ExtraLarge = 'xl',
  ExtraExtraLarge = 'xxl',
}

export type ResponsiveVariant =
  | ResponsiveVariants.ExtraSmall
  | ResponsiveVariants.Small
  | ResponsiveVariants.Medium
  | ResponsiveVariants.Large
  | ResponsiveVariants.ExtraLarge
  | ResponsiveVariants.ExtraExtraLarge

export interface ResponsiveConfig {
  all: boolean
  variants: {
    [ResponsiveVariants.ExtraSmall]: boolean
    [ResponsiveVariants.Small]: boolean
    [ResponsiveVariants.Medium]: boolean
    [ResponsiveVariants.Large]: boolean
    [ResponsiveVariants.ExtraLarge]: boolean
    [ResponsiveVariants.ExtraExtraLarge]: boolean
  }
}
