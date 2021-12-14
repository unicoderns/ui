import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { ModalSizeVariants, ResponsiveVariants } from '@unicodernsui/core'
import { UiModal, UiModalModel } from '../'
import { UiModalDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Modal',
  component: UiModal,
  argTypes: {
    title: { control: { type: 'text' } },
    body: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(ModalSizeVariants),
    },
    fullscreen: {
      control: { type: 'select' },
      options: [false, true, ...Object.values(ResponsiveVariants)],
    },
  },
  parameters: {
    docs: {
      page: UiModalDoc,
    },
  },
}

type StoryModel = UiModalModel

const Template = (args: StoryModel) => ({
  components: { UiModal },
  setup() {
    const toggle = ref(false)

    return { args, toggle }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
  },
  template: `
    <a href="" @click.prevent="toggle=!toggle">Toggle visible</a>
    <br>
    <ui-modal :="args" :show="toggle" @show="show" @close="close() & (toggle = false)" @hide="hide"></ui-modal>
  `,
})

const baseArgs: StoryModel = {
  title: 'Some title',
  body: 'Some body',
  animate: true,
  dismissible: false,
  disableBackdrop: false,
  disableEscKey: false,
  autoFocus: true,
  scrollable: false,
  verticalCenter: false,
  show: true,
}

export const Normal = Template.bind({})
Normal.args = {
  ...baseArgs,
}

export const Small = Template.bind({})
Small.args = {
  ...baseArgs,
  size: ModalSizeVariants.Small,
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  size: ModalSizeVariants.Large,
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  ...baseArgs,
  size: ModalSizeVariants.ExtraLarge,
}
