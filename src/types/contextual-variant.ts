export enum ContextualVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
}

export type ContextualVariant =
  | ContextualVariants.Primary
  | ContextualVariants.Secondary
  | ContextualVariants.Success
  | ContextualVariants.Danger
  | ContextualVariants.Warning
  | ContextualVariants.Info
  | ContextualVariants.Light
  | ContextualVariants.Dark
