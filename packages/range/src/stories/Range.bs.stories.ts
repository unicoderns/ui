import { ref, watch } from 'vue'
import { UiInspector } from '@uicr/code-highlight/src/dev'
import { UiRange, UiRangeModel } from '../'
import { UiRangeDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Range',
  component: UiRange,
  argTypes: {
    label: { control: { type: 'text' } },
    currentValue: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      page: UiRangeDoc,
    },
  },
}

type StoryModel =
  | UiRangeModel
  | {
      currentValue: string
    }

const Template = (args: StoryModel) => ({
  components: { UiRange, UiInspector },
  setup() {
    const currentValue = ref(args.currentValue)
    watch(currentValue, () => {
      console.log(currentValue.value)
    })
    return { args, currentValue }
  },
  template: `
    <ui-inspector>
      <ui-range :="args" v-model:currentValue="currentValue"></ui-range>
    </ui-inspector>
  `,
})

const baseArgs: StoryModel = {
  currentValue: '0',
}

export const Default = Template.bind({})
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  ...baseArgs,
  label: 'Range with default values',
}
Default.parameters = {
  docs: {
    source: {
      code: '<ui-range :="args"></ui-range>',
    },
  },
}

export const MinAndMax = Template.bind({})
MinAndMax.args = {
  min: 0,
  max: 5,
  step: 1,
  disabled: false,
  ...baseArgs,
  label: 'Range with min 0 and max 5',
}
MinAndMax.parameters = {
  docs: {
    source: {
      code: '<ui-range min="0" max="5"></ui-range>',
    },
  },
}

export const Steps = Template.bind({})
Steps.args = {
  min: 0,
  max: 100,
  step: 10,
  disabled: false,
  ...baseArgs,
  label: 'Range with steps of 10',
}
Steps.parameters = {
  docs: {
    source: {
      code: '<ui-range step="10"></ui-range>',
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  min: 0,
  max: 100,
  disabled: true,
  label: 'Disabled range',
  ...baseArgs,
}
Disabled.parameters = {
  docs: {
    source: {
      code: '<ui-range disabled></ui-range>',
    },
  },
}
