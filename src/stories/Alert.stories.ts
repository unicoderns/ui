import { ContextualVariants } from '../types';
import { action } from '@storybook/addon-actions'
import { AlertMessageComponent } from '../index';
import { AlertMessageModel } from '@/components';
import { ref } from 'vue';

export default {
  title: 'UI/Bootstrap/Alert',
  component: AlertMessageComponent,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: { control: { type: 'select' }, options: Object.values(ContextualVariants) },
    ariaLabelCloseButton: { control: { type: 'text' } },
  },
};

type StoryModel = AlertMessageModel | {
  label: string
}

const Template = (args: StoryModel) => ({
  components: { AlertMessageComponent },
  setup() {
    const toggle = ref(true)

    return { args, toggle };
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
  },
  template: `
    <a href="" @click.prevent="toggle=!toggle">Toggle visible</a>
    <br>
    <alert-message-component :="args" :show="toggle" @show="show" @close="close" @hide="hide">{{ args.label }}</alert-message-component>
  `,
});

const baseArgs: StoryModel = {
  label: 'Label',
  variant: ContextualVariants.Primary,
  animate: true,
  dismissible: true,
  show: true,
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