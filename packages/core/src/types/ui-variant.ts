export enum UiVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Gray = 'gray',
}

export type UiVariant =
  | UiVariants.Primary
  | UiVariants.Secondary
  | UiVariants.Success
  | UiVariants.Danger
  | UiVariants.Warning
  | UiVariants.Info
  | UiVariants.Gray
