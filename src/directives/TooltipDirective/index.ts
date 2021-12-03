import { App, DirectiveBinding, createApp, ComponentPublicInstance } from 'vue'
import { createPopper, Placement } from '@popperjs/core'

import { TooltipComponent } from '../../components/TooltipMessage/'

const tooltipDirective = (app: App) => {
  interface Props {
    arg: Placement
    value: string
  }

  app.directive('ui-tooltip', {
    mounted(el: HTMLElement, binding: DirectiveBinding<Props>) {
      const position = (binding.arg as Placement) || 'top'
      const tooltipText = binding.value || ''

      const location = () => {
        if (position === 'right') return 'end'
        else if (position === 'left') return 'start'
        return position
      }

      interface Tooltip extends ComponentPublicInstance {
        text: Props
        location: string
        hostElement: HTMLDivElement
        dispatchEvent: () => void

        hide: () => void

        show: () => void
      }

      const show = new CustomEvent('show')
      const hide = new CustomEvent('hide')
      const close = new CustomEvent('close')

      const createTooltip = () => {
        const tooltip = document.createElement('div')
        const app = createApp(TooltipComponent)
        const tooltipApp = app.mount(tooltip) as Tooltip
        tooltipApp.text = tooltipText
        tooltipApp.location = location()
        tooltipApp.hostElement = tooltip
        tooltipApp.show()
        tooltipApp.$forceUpdate()
        const wrapper = tooltip.getElementsByTagName('div')[0] as HTMLElement
        tooltip.addEventListener('show', () => el.dispatchEvent(show))
        tooltip.addEventListener('hide', () => el.dispatchEvent(hide))
        tooltip.addEventListener('close', () => el.dispatchEvent(close))
        document.body.appendChild(tooltip)
        createPopper(el, wrapper, {
          placement: position,
        })

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

export default tooltipDirective
