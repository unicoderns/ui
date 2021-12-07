import { KeyPairString } from './base'

export const uiThemeConfigInjectionToken = Symbol('UiThemeConfig')

export interface UiComponentThemeConfigModel {
  cssClass:
    | KeyPairString
    | { variants: KeyPairString }
    | { sizes: KeyPairString }
    | { directions: KeyPairString }
    | { positions: KeyPairString }
    | { components: KeyPairString }
}

export interface UiThemeConfigModel {
  [key: string]: UiComponentThemeConfigModel
}
