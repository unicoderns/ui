import { action } from '@storybook/addon-actions'
import { BootstrapVariants, InputSizeVariants } from '@unicodernsui/core'
import { ref, watch } from 'vue'
import { UiSelect, UiSelectModel } from '../'
import { UiSelectDoc } from '../dev'

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

const datasource: any = [
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
  components: { UiSelect },
  setup() {
    const selectedIndex = ref(1)
    watch(selectedIndex, () => {
      console.log(selectedIndex.value)
    })
    return { args, selectedIndex }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-select v-bind="args" @click="click" v-model="selectedIndex"></ui-select>
  `,
})

const MultipleTemplate = (args: StoryModel) => ({
  components: { UiSelect },
  setup() {
    const selectedIndex = ref([1])
    watch(selectedIndex, () => {
      console.log(selectedIndex.value)
    })
    return { args, selectedIndex }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-select v-bind="args" @click="click" v-model="selectedIndex"></ui-select>
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
