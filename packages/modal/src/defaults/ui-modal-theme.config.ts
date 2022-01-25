import {
  BootstrapVariants,
  SizeVariants,
  enumToObjectByValue,
  ResponsiveVariants,
} from '@uicr/core'
import { UiModalThemeConfigModel } from '../'

const baseClass = 'modal'
const bgVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(bgVariantClasses).forEach(
  value => (bgVariantClasses[value] = `bg-${value}`)
)

export const uiModalThemeConfigDefaults: UiModalThemeConfigModel = {
  tags: {
    title: 'h5',
  },
  cssClass: {
    main: baseClass,
    animated: 'fade',
    wrapper: 'modal-dialog',
    verticallyCentered: 'modal-dialog-centered',
    scrollable: 'modal-dialog-scrollable',
    content: 'modal-content',
    header: 'modal-header',
    headerTitle: 'modal-title',
    body: 'modal-body',
    footer: 'modal-footer',
    components: {
      buttonClose: 'ms-auto',
    },
    fullscreenAll: 'modal-fullscreen',
    fullscreenVariants: {
      [ResponsiveVariants.ExtraExtraLarge]: 'modal-fullscreen-xxl-down',
      [ResponsiveVariants.ExtraLarge]: 'modal-fullscreen-xl-down',
      [ResponsiveVariants.Large]: 'modal-fullscreen-lg-down',
      [ResponsiveVariants.Medium]: 'modal-fullscreen-md-down',
      [ResponsiveVariants.Small]: 'modal-fullscreen-sm-down',
      [ResponsiveVariants.ExtraSmall]: '',
    },
    sizes: {
      [SizeVariants.Small]: 'modal-sm',
      [SizeVariants.Large]: 'modal-lg',
      [SizeVariants.ExtraLarge]: 'modal-xl',
    },
  },
}
