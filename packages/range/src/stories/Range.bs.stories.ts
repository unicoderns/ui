import { UiRange, UiRangeModel } from '../'
import { UiRangeDoc } from '../dev'
import { UiInspector } from '@unicodernsui/code-highlight/src/dev'
import { ref, watch } from 'vue'

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

export const MinAndMax = Template.bind({})
MinAndMax.args = {
  min: 0,
  max: 5,
  step: 1,
  disabled: false,
  ...baseArgs,
  label: 'Range with min 0 and max 5',
}

export const Steps = Template.bind({})
Steps.args = {
  min: 0,
  max: 100,
  step: 10,
  disabled: false,
  ...baseArgs,
  label: 'Range wiht rsteps of 10',
}

export const Disabled = Template.bind({})
Disabled.args = {
  min: 0,
  max: 100,
  disabled: true,
  label: 'Disabled range',
  ...baseArgs,
}
