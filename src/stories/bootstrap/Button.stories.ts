import { BootstrapVariants } from '../../defaults'
import { ButtonSizeVariants } from '../../types';
import { ButtonControlComponent } from '../../index';
import { ButtonControlModel } from '../../components';
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Bootstrap/Button',
  component: ButtonControlComponent,
  argTypes: {
    label: { control: { type: 'text' } },
    size: { control: { type: 'select' }, options: Object.values(ButtonSizeVariants) },
    variant: { control: { type: 'select' }, options: Object.values(BootstrapVariants) },
    toggle: { control: { type: 'boolean' } },
  },
};

type StoryModel = ButtonControlModel | {
  label: string
}

const Template = (args: StoryModel) => ({
  components: { ButtonControlComponent },
  setup() {
    return { args };
  },
  methods: {
    toggle: action('toggle'),
  },
  template: `
    <button-control-component :="args" @toggle="toggle" >{{ args.label }}</button-control-component>
  `,
});

const baseArgs: StoryModel = {
  label: 'Label',
  variant: BootstrapVariants.Primary,
  size: SizeVariants.Small,
  anchor: false,
  outline: false,
  active: false,
};


export const Primary = Template.bind({});
Primary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Secondary,
};

export const Success = Template.bind({});
Success.args = {
  ...baseArgs,
  variant: BootstrapVariants.Success,
};

export const Danger = Template.bind({});
Danger.args = {
  ...baseArgs,
  variant: BootstrapVariants.Danger,
};

export const Warning = Template.bind({});
Warning.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
};

export const Info = Template.bind({});
Info.args = {
  ...baseArgs,
  variant: BootstrapVariants.Info,
};

export const Light = Template.bind({});
Light.args = {
  ...baseArgs,
  variant: BootstrapVariants.Light,
};

export const Dark = Template.bind({});
Dark.args = {
  ...baseArgs,
  variant: BootstrapVariants.Dark,
};