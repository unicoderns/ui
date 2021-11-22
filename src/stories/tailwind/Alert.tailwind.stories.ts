import { action } from '@storybook/addon-actions'
import { AlertMessageComponent } from '../../index';
import { AlertMessageModel } from '../../components';
import { ref } from 'vue';
import { provideTailwind, TailwindVariants } from './config';


export default {
  title: 'UI/Tailwind/Alert',
  component: AlertMessageComponent,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: { control: { type: 'select' }, options: Object.values(TailwindVariants) },
  },
};

type StoryModel = AlertMessageModel | {
  label: string
}

const Template = (args: StoryModel) => ({
  components: { AlertMessageComponent },
  setup() {
    const toggle = ref(true)
    provideTailwind()
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
  variant: TailwindVariants.Blue,
  animate: true,
  dismissible: true,
  show: true,
};

export const Blue = Template.bind({});
Blue.args = {
  ...baseArgs,
  variant: 'blue',
};

export const Pink = Template.bind({});
Pink.args = {
  ...baseArgs,
  variant: 'pink',
};

export const Purple = Template.bind({});
Purple.args = {
  ...baseArgs,
  variant: 'purple',
};
