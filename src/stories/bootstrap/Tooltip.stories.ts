import { PopperPlacement } from '../../types'
import { action } from '@storybook/addon-actions'
import { app } from '@storybook/vue3'
import tooltipDirective from '../../directives/TooltipDirective'

tooltipDirective(app)

export default {
  title: 'UI/Bootstrap/Tooltip',
  argTypes: {
    default: { control: { type: 'text' } },
    tooltip: { control: { type: 'text' } },
  },
  parameters: {
    layout: 'centered',
  },
}

type StoryModel = {
  default: string
  tooltip: string
}

const TemplateFn = (position: PopperPlacement) => (args: StoryModel) => ({
  setup() {
    return { args }
  },
  methods: {
    open: action('open'),
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
  },
  template: `
    <button v-ui-tooltip:${position}="args.tooltip" @open="open" @show="show" @close="close" @hide="hide">
    {{args.default}}
    </button>
  `,
})

const baseArgs: StoryModel = {
  default: 'Some text',
  tooltip: 'tooltip',
}

export const Top = TemplateFn(PopperPlacement.Top).bind({})
Top.args = {
  ...baseArgs,
}

export const Left = TemplateFn(PopperPlacement.Left).bind({})
Left.args = {
  ...baseArgs,
}

export const Right = TemplateFn(PopperPlacement.Right).bind({})
Right.args = {
  ...baseArgs,
}

export const Bottom = TemplateFn(PopperPlacement.Bottom).bind({})
Bottom.args = {
  ...baseArgs,
}
