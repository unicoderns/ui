export interface UiTabPropsModel {
  props?: UiTabModel
  uid?: number
}

export interface UiTabModel {
  title: string
  active?: boolean
  disabled?: boolean
}
