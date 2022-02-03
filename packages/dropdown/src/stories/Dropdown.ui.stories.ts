import { Ref, ref, watch } from 'vue'
import {
  BootstrapVariants,
  SizeVariants,
  Directions,
  ButtonSizeVariants,
  MenuItem,
  MenuItemTypes,
} from '@uicr/core'
import { action } from '@storybook/addon-actions'
import { UiDropdown, UiDropdownModel } from '..'
import { UiDropdownDoc } from '../dev'

export default {
  title: 'UI/Dropdown',
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
    ['aria:expanded']: { name: 'expanded (aria)', control: { type: 'text' } },
    ['aria:groupRole']: {
      name: 'group role (aria)',
      control: { type: 'text' },
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
  label: 'Primary',
  variant: BootstrapVariants.Primary,
}
Primary.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="primary" label="Primary" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...baseArgs,
  label: 'Secondary',
  variant: BootstrapVariants.Secondary,
}
Secondary.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="secondary" label="Secondary" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Success = Template.bind({})
Success.args = {
  ...baseArgs,
  label: 'Success',
  variant: BootstrapVariants.Success,
}
Success.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="success" label="Success" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Danger = Template.bind({})
Danger.args = {
  ...baseArgs,
  label: 'Danger',
  variant: BootstrapVariants.Danger,
}
Danger.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="danger" label="Danger" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  label: 'Warning',
  variant: BootstrapVariants.Warning,
}
Warning.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="warning" label="Warning" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  label: 'Info',
  variant: BootstrapVariants.Info,
}
Info.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="info" label="Info" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  label: 'Light',
  variant: BootstrapVariants.Light,
}
Light.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="light" label="Light" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Dark = Template.bind({})
Dark.args = {
  ...baseArgs,
  label: 'Dark',
  variant: BootstrapVariants.Dark,
  invert: true,
}
Dark.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="dark" label="Dark" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const MenuAlignEnd = Template.bind({})
MenuAlignEnd.args = {
  ...baseArgs,
  label: 'Menu Align End',
  variant: BootstrapVariants.Success,
  menuAlignEnd: true,
}
MenuAlignEnd.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown menuAlignEnd varianr="success" label="MenuAlignEnd" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Left = Template.bind({})
Left.args = {
  ...baseArgs,
  label: 'Left',
  variant: BootstrapVariants.Warning,
  arrowDirection: Directions.Left,
}
Left.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="warning" arrowDirection="left" label="Left" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Right = Template.bind({})
Right.args = {
  ...baseArgs,
  label: 'Right',
  variant: BootstrapVariants.Warning,
  arrowDirection: Directions.Right,
}
Right.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="warning" arrowDirection="right" label="Right" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const Up = Template.bind({})
Up.args = {
  ...baseArgs,
  label: 'Up',
  variant: BootstrapVariants.Warning,
  arrowDirection: Directions.Up,
}
Up.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="warning" arrowDirection="up" label="Up" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}

export const SplitButton = Template.bind({})
SplitButton.args = {
  ...baseArgs,
  label: 'Split Button',
  variant: BootstrapVariants.Danger,
  splitButton: true,
}
SplitButton.parameters = {
  docs: {
    source: {
      code:
        '<ui-dropdown variant="danger" splitButton label="Split Button" :datasource="datasource" @select="select"></ui-dropdown>',
    },
  },
}
