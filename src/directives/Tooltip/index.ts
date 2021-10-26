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

const props = {
  arg: String,
  value: String,
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

      let classes = `tooltip bs-${classPrefix}${location()} show`

      //console.log(classes)

      const tooltip = document.createElement('div')

      el.addEventListener('mouseover', () => {
        ;(tooltip.innerHTML =
          "<div id='tooltip' role='tooltip'>" +
          '<div class="tooltip-inner">' +
          tooltipText +
          '</div>' +
          '<div class="tooltip-arrow" id="arrow" data-popper-arrow></div>' +
          '</div>'),
          // el.appendChild(tooltip)
          document.body.appendChild(tooltip)

        createPopper(el, tooltip, {
          placement: position,
        })

        tooltip.className = classes
      })

      el.addEventListener('mouseleave', () => {
        //tooltip.remove()
      })
    },
  })
}

export default tooltipDirective
