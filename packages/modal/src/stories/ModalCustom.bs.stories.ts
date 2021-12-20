import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { ModalSizeVariants, ResponsiveVariants } from '@unicodernsui/core'
import { UiModal, UiModalModel } from '../'
import { UiModalDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Modal',
  component: UiModal,
  argTypes: {
    titleSlot: { control: { type: 'text' } },
    bodySlot: { control: { type: 'text' } },
    footerSlot: { control: { type: 'text' } },
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

type StoryModel =
  | UiModalModel
  | {
      titleSlot: string
      bodySlot: string
      footerSlot: string
    }

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
    <ui-modal :="args" :show="toggle" @show="show" @close="close() & (toggle = false)" @hide="hide">
      <template #title>Slot: <a href>{{ args.titleSlot }}</a></template>
      <template #body>Slot: &#1083; {{ args.bodySlot }} &#1083; &#1083; &#1083;</template>
      <template #footer><button>{{ args.footerSlot }}</button></template>
    </ui-modal>
  `,
})

const baseArgs: StoryModel = {
  titleSlot: 'Custom title',
  bodySlot: 'Custom body',
  footerSlot: 'Custom footer action',
  animate: true,
  dismissible: false,
  disableBackdrop: false,
  disableEscKey: false,
  autoFocus: true,
  scrollable: false,
  verticalCenter: false,
  show: true,
}

export const CustomSlots = Template.bind({})
CustomSlots.args = {
  ...baseArgs,
}
