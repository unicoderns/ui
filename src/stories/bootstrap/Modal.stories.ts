import { ModalSizeVariants } from '../../types'
import { action } from '@storybook/addon-actions'
import { ModalDialogComponent, ModalDialogModel } from '../../index'
import { ref } from 'vue'

export default {
  title: 'UI/Bootstrap/Modal',
  component: ModalDialogComponent,
  argTypes: {
    title: { control: { type: 'text' } },
    body: { control: { type: 'text' } },
    size: { control: { type: 'select' }, options: Object.values(ModalSizeVariants) },
  }
}

type StoryModel = ModalDialogModel

const Template = (args: StoryModel) => ({
  components: { ModalDialogComponent },
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
    <modal-dialog-component :="args" :show="toggle" @show="show" @close="close() & (toggle = false)" @hide="hide"></modal-dialog-component>
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