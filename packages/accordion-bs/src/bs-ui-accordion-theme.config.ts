import { UiAccordionThemeConfigModel } from '@uicr/accordion'

const baseClass = 'accordion'
export const bsUiAccordionThemeConfigDefaults: UiAccordionThemeConfigModel = {
  tags: {
    header: 'h2',
  },
  cssClass: {
    main: `${baseClass}-item`,
    container: baseClass,
    containerFlush: `${baseClass}-flush`,
    header: `${baseClass}-header`,
    button: `${baseClass}-button`,
    buttonCollapsed: 'collapsed',
    bodyWrapper: `${baseClass}-collapse collapse`,
    body: `${baseClass}-body`,
    disabled: 'text-secondary',
  },
}
