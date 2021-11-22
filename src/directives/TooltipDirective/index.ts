import { App, DirectiveBinding, createApp, ComponentPublicInstance } from 'vue'
import { createPopper, Placement } from '@popperjs/core'
import { TooltipComponent } from '../../components/TooltipMessage'

const tooltipDirective = (app: App) => {
  interface Props {
    arg: Placement
    value: string
  }

  app.directive('ui-tooltip', {
    mounted(el: HTMLElement, binding: DirectiveBinding<Props>) {
      const position = (binding.arg as Placement) || 'top'
      const tooltipText = binding.value || 'Tooltip text'

      const location = () => {
        if (position === 'right') return 'end'
        else if (position === 'left') return 'start'
        return position
      }

      interface Tooltip extends ComponentPublicInstance {
        text: Props
        location: string
        hostElement: HTMLDivElement

        hide: () => void
      }

      const createTooltip = () => {
        const tooltip = document.createElement('div')
        const app = createApp(TooltipComponent)
        const tooltipApp = app.mount(tooltip) as Tooltip
        tooltipApp.text = tooltipText
        tooltipApp.location = location()
        tooltipApp.hostElement = tooltip
        const wrapper = tooltip.getElementsByClassName(
          'tooltip'
        )[0] as HTMLElement

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
