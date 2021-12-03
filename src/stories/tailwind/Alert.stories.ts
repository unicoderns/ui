import { action } from '@storybook/addon-actions'
import { UiAlert } from '../../index';
import { AlertMessageModel } from '../../components';
import { ref } from 'vue';
import { provideTailwind, TailwindVariants } from './theme';


export default {
  title: 'UI/Tailwind/Alert',
  component: UiAlert,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: { control: { type: 'select' }, options: Object.values(TailwindVariants) },
  },
};

type StoryModel = AlertMessageModel | {
  label: string
}

const Template = (args: StoryModel) => ({
  components: { UiAlert },
  setup() {
    provideTailwind()
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
    <ui-alert :="args" :show="toggle" @show="show" @close="close" @hide="hide">{{ args.label }}</ui-alert>
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
