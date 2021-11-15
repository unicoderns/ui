import { ContextualVariants, SizeVariants } from '../types';
import { ButtonControlComponent } from '../index';
import { ButtonControlModel } from '../components';
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Bootstrap/Button',
  component: ButtonControlComponent,
  argTypes: {
    label: { control: { type: 'text' } },
    size: { control: { type: 'select' }, options: Object.values(SizeVariants) },
    variant: { control: { type: 'select' }, options: Object.values(ContextualVariants) },
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
  variant: ContextualVariants.Primary,
  size: SizeVariants.Small,
  anchor: false,
  outline: false,
  active: false,
};


export const Primary = Template.bind({});
Primary.args = {
  ...baseArgs,
  variant: ContextualVariants.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...baseArgs,
  variant: ContextualVariants.Secondary,
};

export const Success = Template.bind({});
Success.args = {
  ...baseArgs,
  variant: ContextualVariants.Success,
};

export const Danger = Template.bind({});
Danger.args = {
  ...baseArgs,
  variant: ContextualVariants.Danger,
};

export const Warning = Template.bind({});
Warning.args = {
  ...baseArgs,
  variant: ContextualVariants.Warning,
};

export const Info = Template.bind({});
Info.args = {
  ...baseArgs,
  variant: ContextualVariants.Info,
};

export const Light = Template.bind({});
Light.args = {
  ...baseArgs,
  variant: ContextualVariants.Light,
};

export const Dark = Template.bind({});
Dark.args = {
  ...baseArgs,
  variant: ContextualVariants.Dark,
};