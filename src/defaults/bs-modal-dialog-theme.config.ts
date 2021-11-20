import { ModalDialogThemeConfigModel } from '../components'
import { BootstrapVariants } from './bootstrap-variant'
import { SizeVariants } from '../types'
import { enumToObjectByValue } from '../utils'

const baseClass = 'modal'
const bgVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(bgVariantClasses).forEach(
  value => (bgVariantClasses[value] = `bg-${value}`)
)

export const bsModalDialogThemeConfigDefaults: ModalDialogThemeConfigModel = {
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
    sizes: {
      [SizeVariants.Small]: 'modal-sm',
      [SizeVariants.Large]: 'modal-lg',
      [SizeVariants.ExtraLarge]: 'modal-xl',
    },
  },
}
