import { ModalDialogThemeConfigModel } from '../../../components'
import { SizeVariants } from '../../../types'

export const twModalDialogThemeConfigDefaults: ModalDialogThemeConfigModel = {
  tags: {
    title: 'h5',
  },
  cssClass: {
    main: '',
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
