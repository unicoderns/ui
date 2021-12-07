import { action } from '@storybook/addon-actions'
import { MenuItem } from '@unicodernsui/core'
import { UiMenu, UiMenuModel } from '../'

export default {
  title: 'UI/Bootstrap/Menu',
  component: UiMenu,
  argTypes: {
    custom: { control: { type: 'boolean' } },
  },
}

type StoryModel =
  | UiMenuModel
  | {
      custom: boolean
    }

const Template = (args: StoryModel) => ({
  components: { UiMenu },
  setup() {
    return { args }
  },
  methods: {
    toggle: action('toggle'),
  },
  template: `
    <ui-menu v-if="args.custom" :="args">
      <template #default="{ item }">
        <i>
          &#9917 <b>{{ item.content }}</b>
        </i>
      </template>
    </ui-menu>
    <ui-menu v-else :="args">
      <template #default="{ item }">{{ item.content }}</template>
    </ui-menu>
  `,
})

const datasource = [
  {
    type: 'header',
    content: 'This is a header item',
  },
  {
    type: 'text',
    content: 'This is a text item',
  },
  {
    type: 'divider',
  },
  {
    type: 'link',
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a link item',
  },
  {
    type: 'button',
    content: 'This is a button item',
  },
  {
    type: 'divider',
  },
  {
    type: 'link',
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is an active link item',
    active: true,
  },
  {
    type: 'button',
    content: 'This is an active button item',
    active: true,
  },
  {
    type: 'divider',
  },
  {
    type: 'link',
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a disabled link item',
    disabled: true,
  },
  {
    type: 'button',
    content: 'This is a disabled button item',
    disabled: true,
  },
  {
    type: 'Raw',
    content: 'This is a raw item',
  },
] as MenuItem[]

const baseArgs: StoryModel = {
  datasource,
  defaultSelectedIndex: undefined,
  invert: false,
  dropdown: false,
  custom: false,
}

export const Normal = Template.bind({})
Normal.args = {
  ...baseArgs,
}

export const Inverted = Template.bind({})
Inverted.args = {
  ...baseArgs,
  invert: true,
}

export const DefaultIndex = Template.bind({})
DefaultIndex.args = {
  ...baseArgs,
  defaultSelectedIndex: 4,
}

export const Custom = Template.bind({})
Custom.args = {
  ...baseArgs,
  custom: true,
}
