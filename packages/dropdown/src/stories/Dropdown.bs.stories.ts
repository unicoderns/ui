import {
  BootstrapVariants,
  SizeVariants,
  Directions,
  ButtonSizeVariants,
  MenuItem,
  MenuItemTypes,
} from '@unicodernsui/core'
import { action } from '@storybook/addon-actions'
import { UiDropdown, UiDropdownModel } from '../'

export default {
  title: 'UI/Bootstrap/Dropdown',
  component: UiDropdown,
  argTypes: {
    label: { control: { type: 'text' } },
    arrowDirection: {
      control: { type: 'select' },
      options: Object.values(Directions),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSizeVariants),
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
  },
}

const datasource: MenuItem[] = [
  {
    type: MenuItemTypes.Header,
    content: 'This is a header item',
  },
  {
    type: MenuItemTypes.Text,
    content: 'This is a text item',
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a link item',
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is a button item',
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is an active link item',
    disabled: false,
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is an active button item',
    disabled: false,
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a disabled link item',
    disabled: true,
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is a disabled button item',
    disabled: true,
  },
  {
    type: MenuItemTypes.Raw,
    content: '<i>This is a <b>raw</b> item</i>',
  },
]
const Template = (args: UiDropdownModel) => ({
  components: { UiDropdown },
  setup() {
    return { args }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    select: action('select'),
  },
  template: `
    <ui-dropdown v-bind="args" @show="show" @hide="hide" @select="select"></ui-dropdown>
  `,
})

const baseArgs: UiDropdownModel = {
  label: 'Label',
  variant: BootstrapVariants.Primary,
  datasource,
  outline: false,
  anchor: false,
  invert: false,
  size: SizeVariants.Small,
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: Directions.Down,
}

export const Primary = Template.bind({})
Primary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Secondary,
}

export const Success = Template.bind({})
Success.args = {
  ...baseArgs,
  variant: BootstrapVariants.Success,
}

export const Danger = Template.bind({})
Danger.args = {
  ...baseArgs,
  variant: BootstrapVariants.Danger,
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  variant: BootstrapVariants.Info,
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  variant: BootstrapVariants.Light,
}

export const Dark = Template.bind({})
Dark.args = {
  ...baseArgs,
  variant: BootstrapVariants.Dark,
  invert: true,
}
