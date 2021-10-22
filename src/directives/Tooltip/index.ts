import { App } from 'vue'
import { createPopper } from '@popperjs/core'
import { cssClassPrefix } from '@/utils'

/* eslint-disable prefer-const */
function init(el: HTMLElement, binding: any) {
  let position = binding.arg || 'top'
  let tooltipText = binding.value || 'Tooltip text'
  el.setAttribute('position', position)
  el.setAttribute('tooltip', tooltipText)
}

const tooltipDirective = (app: App) => {
  app.directive('ui-tooltip', {
    mounted(el: HTMLElement, binding: any) {
      init(el, binding)

      let position = binding.arg || 'top'
      let tooltipText = binding.value || 'Tooltip text'

      const location = () => {
        if (position === 'right') return 'end'
        else if (position === 'left') return 'start'
        return position
      }
      const className = 'tooltip'
      const classPrefix = cssClassPrefix(className)

      const classes = position ? `bs-${classPrefix}${location()}` : ''

      console.log(classes)

      const tooltip = document.createElement('div')

      el.addEventListener('mouseover', () => {
        tooltip.className = `${classes} show`
        tooltip.id = 'tooltip'
        tooltip.setAttribute('role', 'tooltip')
        tooltip.innerHTML =
          '<div class="tooltip-inner">' +
          tooltipText +
          '</div>' +
          '<div class="tooltip-arrow" id="arrow" data-popper-arrow></div>'

        //TODO: if alredy exists
        document.body.appendChild(tooltip)
        createPopper(el, tooltip, {
          placement: position,
        })
      })

      el.addEventListener('mouseleave', () => {
        tooltip.remove()
      })
    },
  })
}

export default tooltipDirective
