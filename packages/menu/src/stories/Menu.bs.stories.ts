import { action } from '@storybook/addon-actions'
import { MenuItem } from '@uicr/core'
import { UiInspector } from '@uicr/code-highlight/src/dev'
import { UiMenu, UiMenuModel } from '..'
import { UiMenuDoc } from '../dev'

export default {
  title: 'UI/Menu',
  component: UiMenu,
  argTypes: {
    custom: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      page: UiMenuDoc,
    },
  },
}

type StoryModel =
  | UiMenuModel
  | {
      custom: boolean
    }

const Template = (args: StoryModel) => ({
  components: { UiMenu, UiInspector },
  setup() {
    return { args }
  },
  methods: {
    select: action('select'),
  },
  template: `
    <ui-inspector>
      <ui-menu v-if="args.custom" :="args" @select="select">
        <template #default="{ item }">
          <i>
            &#9917 <b>{{ item.content }}</b>
          </i>
        </template>
      </ui-menu>
      <ui-menu v-else :="args"  @select="select"></ui-menu>
    </ui-inspector>
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
  'This is a plain string only button item',
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
Normal.parameters = {
  docs: {
    source: {
      code: '<ui-menu :datasource="datasource" @select="select"></ui-menu>',
    },
  },
}

export const Inverted = Template.bind({})
Inverted.args = {
  ...baseArgs,
  invert: true,
}
Inverted.parameters = {
  docs: {
    source: {
      code:
        '<ui-menu inverted :datasource="datasource" @select="select"></ui-menu>',
    },
  },
}

export const DefaultIndex = Template.bind({})
DefaultIndex.args = {
  ...baseArgs,
  defaultSelectedIndex: 4,
}
DefaultIndex.parameters = {
  docs: {
    source: {
      code:
        '<ui-menu defaultSelectedIndex="4" :datasource="datasource" @select="select"></ui-menu>',
    },
  },
}

export const Custom = Template.bind({})
Custom.args = {
  ...baseArgs,
  custom: true,
}
Custom.parameters = {
  docs: {
    source: {
      code: `
<ui-menu :datasource="datasource" @select="select">
  <template #default="{ item }">
    <b>{{ item.content }}</b>
  </template>
</ui-menu>
        `,
    },
  },
}
