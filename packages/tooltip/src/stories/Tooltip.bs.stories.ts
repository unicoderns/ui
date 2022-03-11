import { action } from '@storybook/addon-actions'
import { app } from '@storybook/vue3'
import { PopperCardinalPlacements } from '@uicr/core'
import { installTooltipDirective } from '..'
import { UiTooltipDoc } from '../dev'

installTooltipDirective(app)

export default {
  title: 'UI/Tooltip',
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

const TemplateFn = (position: PopperCardinalPlacements) => (
  args: StoryModel
) => ({
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

export const Top = TemplateFn(PopperCardinalPlacements.Top).bind({})
Top.args = {
  ...baseArgs,
}
Top.parameters = {
  docs: {
    source: {
      code: '<button v-ui-tooltip:top="tooltip">Top</button>',
    },
  },
}

export const Left = TemplateFn(PopperCardinalPlacements.Left).bind({})
Left.args = {
  ...baseArgs,
}
Left.parameters = {
  docs: {
    source: {
      code: '<button v-ui-tooltip:left="tooltip">Top</button>',
    },
  },
}

export const Right = TemplateFn(PopperCardinalPlacements.Right).bind({})
Right.args = {
  ...baseArgs,
}
Right.parameters = {
  docs: {
    source: {
      code: '<button v-ui-tooltip:right="tooltip">Top</button>',
    },
  },
}

export const Bottom = TemplateFn(PopperCardinalPlacements.Bottom).bind({})
Bottom.args = {
  ...baseArgs,
}
Bottom.parameters = {
  docs: {
    source: {
      code: '<button v-ui-tooltip:bottom="tooltip">Top</button>',
    },
  },
}
