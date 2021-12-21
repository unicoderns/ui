import { Ref, ref, watch } from 'vue'
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
import { UiDropdownDoc } from '../dev'

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
  parameters: {
    layout: 'centered',
    docs: {
      page: UiDropdownDoc,
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
    const container: Ref<HTMLElement | null> = ref(null)

    watch(container, elem =>
      elem?.scrollIntoView({ block: 'center', inline: 'center' })
    )

    return { args, container }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    select: action('select'),
  },
  template: `
    <div style="overflow: scroll">
      <div ref="container" style="width: 4000px; height: 4000px; display: flex; align-items: center; justify-content: center;">
        <ui-dropdown v-bind="args" @show="show" @hide="hide" @select="select"></ui-dropdown>
      </div>
    </div>
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

export const MenuAlignEnd = Template.bind({})
MenuAlignEnd.args = {
  ...baseArgs,
  variant: BootstrapVariants.Success,
  menuAlignEnd: true,
}


export const Left = Template.bind({})
Left.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
  arrowDirection: Directions.Left,
}

export const Right = Template.bind({})
Right.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
  arrowDirection: Directions.Right,
}

export const Up = Template.bind({})
Up.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
  arrowDirection: Directions.Up,
}
