import { InputSizeVariants } from '@unicodernsui/core'
import { ref, watch } from 'vue'
import { UiSelect, UiSelectModel } from '../'
import { UiSelectDoc } from '../dev'
import { UiInspector } from '@unicodernsui/code-highlight/src/dev'

export default {
  title: 'UI/Bootstrap/Select',
  component: UiSelect,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.values(InputSizeVariants),
    },
  },
  parameters: {
    docs: {
      page: UiSelectDoc,
    },
  },
}

const datasource = [
  {
    index: 1,
    text: 'One',
  },
  {
    index: 2,
    text: 'Two',
  },
  {
    index: 3,
    text: 'Three',
  },
  {
    index: 4,
    text: 'Four',
  },
]

type StoryModel =
  | UiSelectModel
  | {
      label: string
    }

const Template = (args: StoryModel) => ({
  components: { UiSelect, UiInspector },
  setup() {
    const selectedIndex = ref(1)
    watch(selectedIndex, () => {
      console.log(selectedIndex.value)
    })
    return { args, selectedIndex }
  },
  template: `
  <ui-inspector>
    <ui-select v-bind="args" v-model="selectedIndex"></ui-select>
  </ui-inspector>
  `,
})

const MultipleTemplate = (args: StoryModel) => ({
  components: { UiSelect, UiInspector },
  setup() {
    const selectedIndex = ref([1])
    watch(selectedIndex, () => {
      console.log(selectedIndex.value)
    })
    return { args, selectedIndex }
  },
  template: `
    <ui-inspector>
      <ui-select v-bind="args" v-model="selectedIndex"></ui-select>
    </ui-inspector>
  `,
})

const baseArgs: any = {
  datasource: datasource,
}

export const Small = Template.bind({})
Small.args = {
  disabled: false,
  multiple: false,
  size: InputSizeVariants.Small,
  ...baseArgs,
}

export const Medium = Template.bind({})
Medium.args = {
  disabled: false,
  multiple: false,
  size: InputSizeVariants.Medium,
  ...baseArgs,
}

export const Large = Template.bind({})
Large.args = {
  disabled: false,
  multiple: false,
  size: InputSizeVariants.Large,
  ...baseArgs,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  multiple: false,
  ...baseArgs,
}

export const Multiple = MultipleTemplate.bind({})
Multiple.args = {
  disabled: false,
  multiple: true,
  ...baseArgs,
}
