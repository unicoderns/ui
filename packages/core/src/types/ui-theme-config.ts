import { KeyPairString } from './base'

export const uiUseDarkThemeInjectionToken = Symbol('UiUseThemeDark')

export interface UiComponentThemeConfigModel {
  cssClass:
    | KeyPairString
    | { variants: KeyPairString }
    | { sizes: KeyPairString }
    | { directions: KeyPairString }
    | { positions: KeyPairString }
    | { components: KeyPairString }
  cssDark?:
    | KeyPairString
    | { variants?: KeyPairString }
    | { components?: KeyPairString }
}
