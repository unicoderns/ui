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

export class Responsive<T = any> {
  public all?: T = undefined
  public variants: { [key: string]: T } = {}

  constructor(def: T | undefined = undefined) {
    this.all = def
  }
}
