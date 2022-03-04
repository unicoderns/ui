import { action } from '@storybook/addon-actions'
import { ref, watch } from 'vue'
import { UiCheckbox, UiCheckboxModel } from '..'
import { UiCheckboxDoc } from '../dev'

export default {
  title: 'UI/Checkbox',
  component: UiCheckbox,
  argTypes: {
    label: { control: { type: 'text' } },
    ['aria:label']: { name: 'label (aria)', control: { type: 'text' } },
  },
  parameters: {
    docs: {
      page: UiCheckboxDoc,
    },
  },
}

type StoryModel = UiCheckboxModel

const Template = (args: StoryModel) => ({
  components: { UiCheckbox },
  setup() {
    const { ...newArgs } = args
    const value = ref([])
    watch(value, v => action('updated:modelValue')(v))
    return { args: newArgs, value }
  },
  methods: {
    modelValue: action('updated:modelValue'),
  },
  template: `
    <ui-checkbox :="args" v-model="value" value="one">One</ui-checkbox>
    <ui-checkbox :="args" v-model="value" value="two">Two</ui-checkbox>
    <ui-checkbox :="args" v-model="value" value="three">Three</ui-checkbox>
  `,
})

const baseArgs: StoryModel = {}

export const Array = Template.bind({})
Array.args = {
  ...baseArgs,
}
Array.parameters = {
  docs: {
    source: {
      code: `
<ui-checkbox :="args" v-model="value" value="one">One</ui-checkbox>
<ui-checkbox :="args" v-model="value" value="two">Two</ui-checkbox>
<ui-checkbox :="args" v-model="value" value="three">Three</ui-checkbox>
`,
    },
  },
}
