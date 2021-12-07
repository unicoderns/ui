import { App, DirectiveBinding, createApp, ComponentPublicInstance } from 'vue'
import { createPopper, Placement } from '@popperjs/core'

import TooltipComponent from './tooltip-message.component.vue'

const installTooltipDirective = (app: App) => {
  interface Props {
    arg: Placement
    value: string
  }

  app.directive('ui-tooltip', {
    mounted(el: HTMLElement, binding: DirectiveBinding<Props>) {
      const position = (binding.arg as Placement) || 'top'
      const tooltipText = binding.value || ''

      interface Tooltip extends ComponentPublicInstance {
        text: Props | ''
        location: string
        hostElement: HTMLDivElement
        dispatchEvent: () => void

        hide: () => void

        show: () => void
      }
      const openEvent = new CustomEvent('open')
      const showEvent = new CustomEvent('show')
      const hideEvent = new CustomEvent('hide')
      const closeEvent = new CustomEvent('close')

      const createTooltip = () => {
        const tooltip = document.createElement('div')
        const app = createApp(TooltipComponent)
        const tooltipApp = app.mount(tooltip) as Tooltip
        tooltipApp.text = tooltipText
        tooltipApp.location = position
        tooltipApp.hostElement = tooltip
        tooltipApp.show()

        tooltip.addEventListener('open', () => {
          const wrapper = tooltip.getElementsByTagName('div')[0] as HTMLElement
          createPopper(el, wrapper, {
            placement: position,
          })

          el.dispatchEvent(openEvent)
        })
        tooltip.addEventListener('show', () => el.dispatchEvent(showEvent))
        tooltip.addEventListener('hide', () => el.dispatchEvent(hideEvent))
        tooltip.addEventListener('close', () => el.dispatchEvent(closeEvent))
        document.body.appendChild(tooltip)

        return tooltipApp.hide
      }
      let hideCallback: () => void

      el.addEventListener('mouseover', () => {
        hideCallback = createTooltip()
      })

      el.addEventListener('mouseleave', () => {
        hideCallback && hideCallback()
      })
    },
  })
}

export default installTooltipDirective
