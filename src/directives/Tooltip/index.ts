import { createPopper } from '@popperjs/core'

/* eslint-disable prefer-const */
function init(
  el: { setAttribute: (arg0: string, arg1: any) => void },
  binding: { arg: string; value: string }
) {
  let position = binding.arg || 'top'
  let tooltipText = binding.value || 'Tooltip text'
  el.setAttribute('position', position)
  el.setAttribute('tooltip', tooltipText)
}

const tooltipDirective = (app: {
  directive: (
    arg0: string,
    arg1: {
      mounted(el: any, binding: any): void
      updated(el: any, binding: any): void
    }
  ) => void
}) => {
  app.directive('ui-tooltip', {
    mounted(el: any, binding: any) {
      // init(el, binding)

      const tooltip = document.createElement('div')

      el.addEventListener('mouseover', () => {
        tooltip.className = 'tooltip show'
        tooltip.id = 'tooltip'
        tooltip.setAttribute('role', 'tooltip')
        tooltip.innerHTML =
          '<div class="tooltip-inner">Tooltip</div>' +
          '<div class="tooltip-arrow" id="arrow" data-popper-arrow></div>'
        console.log(tooltip)
        //TODO: if alredy exists
        document.body.appendChild(tooltip)
        createPopper(el, tooltip, {
          placement: 'bottom',
        })
      })

      el.addEventListener('mouseleave', () => {
        console.log('mouseleave')
        tooltip.remove()
      })
    },
    updated(el: any, binding: any) {
      // init(el, binding)
    },
  })
}

export default tooltipDirective
