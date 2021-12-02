import { MenuItem } from '../../types';
import { ControlMenuComponent, ControlMenuModel } from '../../components';
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Bootstrap/Menu',
  component: ControlMenuComponent,
  argTypes: {
    custom: { control: { type: 'boolean' } },
  },
};

type StoryModel = ControlMenuModel | {
  custom: boolean
}

const Template = (args: StoryModel) => ({
  components: { ControlMenuComponent },
  setup() {
    return { args };
  },
  methods: {
    toggle: action('toggle'),
  },
  template: `
    <ControlMenuComponent v-if="args.custom" :="args">
      <template #default="{ item }">
        <i>
          &#9917; <b>{{ item.content }}</b>
        </i>
      </template>
    </ControlMenuComponent>
    <ControlMenuComponent v-else :="args">
      <template #default="{ item }">{{ item.content }}</template>
    </ControlMenuComponent>
  `,
});

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
] as MenuItem[];

const baseArgs: StoryModel = {
  datasource,
  defaultSelectedIndex: undefined,
  invert: false,
  dropdown: false,
  custom: false,
};


export const Normal = Template.bind({});
Normal.args = {
  ...baseArgs,
};

export const Inverted = Template.bind({});
Inverted.args = {
  ...baseArgs,
  invert: true,
};

export const DefaultIndex = Template.bind({});
DefaultIndex.args = {
  ...baseArgs,
  defaultSelectedIndex: 4,
};

export const Custom = Template.bind({});
Custom.args = {
  ...baseArgs,
  custom: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Secondary,
// };

// export const Success = Template.bind({});
// Success.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Success,
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Danger,
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Warning,
// };

// export const Info = Template.bind({});
// Info.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Info,
// };

// export const Light = Template.bind({});
// Light.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Light,
// };

// export const Dark = Template.bind({});
// Dark.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Dark,
// };

// export const Medium = Template.bind({});
// Medium.args = {
//   ...baseArgs,
//   size: ButtonSizeVariants.Medium,
// };

// export const Large = Template.bind({});
// Large.args = {
//   ...baseArgs,
//   size: ButtonSizeVariants.Large,
// };

// export const Active = Template.bind({});
// Active.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Warning,
//   active: true,
// };

// export const Toggle = Template.bind({});
// Toggle.args = {
//   ...baseArgs,
//   variant: BootstrapVariants.Warning,
//   toggle: true,
// };

// export const Anchor = Template.bind({});
// Anchor.args = {
//   ...baseArgs,
//   anchor: true,
// };