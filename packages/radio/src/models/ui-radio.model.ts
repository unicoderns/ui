export interface UiRadioModel {
  disabled: boolean
  modelValue: boolean | string | string[] | number | number[]
  inline: boolean
  switch: boolean
  groupName?: string
  ['aria:label']?: string
}
