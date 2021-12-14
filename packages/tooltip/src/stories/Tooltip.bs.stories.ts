import { action } from '@storybook/addon-actions'
import { app } from '@storybook/vue3'
import { PopperCardinalPlacement } from '@unicodernsui/core'
import { installTooltipDirective } from '../'
import { UiTooltipDoc } from '../dev'

installTooltipDirective(app)

export default {
  title: 'UI/Bootstrap/Tooltip',
  argTypes: {
    default: { control: { type: 'text' } },
    tooltip: { control: { type: 'text' } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      page: UiTooltipDoc,
    },
  },
}

type StoryModel = {
  default: string
  tooltip: string
}

const TemplateFn = (position: PopperCardinalPlacement) => (args: StoryModel) => ({
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

export const Top = TemplateFn(PopperCardinalPlacement.Top).bind({})
Top.args = {
  ...baseArgs,
}

export const Left = TemplateFn(PopperCardinalPlacement.Left).bind({})
Left.args = {
  ...baseArgs,
}

export const Right = TemplateFn(PopperCardinalPlacement.Right).bind({})
Right.args = {
  ...baseArgs,
}

export const Bottom = TemplateFn(PopperCardinalPlacement.Bottom).bind({})
Bottom.args = {
  ...baseArgs,
}
