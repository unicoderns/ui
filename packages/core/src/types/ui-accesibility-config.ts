export const uiAriaConfigInjectionToken = Symbol('UiAriaConfig')

export interface UiComponentAriaConfigModel {
  [key: string]: string
}

export interface UiAriaConfigModel {
  [key: string]: UiComponentAriaConfigModel
}
