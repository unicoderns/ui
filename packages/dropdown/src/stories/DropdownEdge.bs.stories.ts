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
      setTimeout(
        () => elem?.scrollIntoView({ block: 'center', inline: 'center' }),
        500
      )
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
      <div ref="container" style="width: 4000px; height: 4000px; display: flex; align-items: center; justify-content: center; top: 0">
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

export const Edge = Template.bind({})
Edge.args = {
  ...baseArgs,
  label: 'Scroll around the edges',
  variant: BootstrapVariants.Primary,
}
