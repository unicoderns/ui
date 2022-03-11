import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { ModalSizeVariants, ResponsiveVariants } from '@uicr/core'
import { UiInspector } from '@uicr/code-highlight/src/dev'
import { UiModal, UiModalModel } from '..'
import { UiModalDoc } from '../dev'

export default {
  title: 'UI/Modal',
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
    ['aria:title']: { name: 'title (aria)', control: { type: 'text' } },
    ['aria:description']: {
      name: 'description (aria)',
      control: { type: 'text' },
    },
    ['aria:role']: { name: 'role (aria)', control: { type: 'text' } },
    ['aria:buttonClose']: {
      name: 'button close (aria)',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: UiModalDoc,
    },
  },
}

type StoryModel = UiModalModel & {
  titleSlot: string
  bodySlot: string
  footerSlot: string
}

const Template = (args: StoryModel) => ({
  components: { UiModal, UiInspector },
  setup() {
    const { titleSlot, bodySlot, footerSlot, ...newArgs } = args
    const toggle = ref(false)

    return { args: newArgs, titleSlot, bodySlot, footerSlot, toggle }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
  },
  template: `
    <ui-inspector>
      <ui-modal :="args" :show="toggle" @show="show" @close="close() & (toggle = false)" @hide="hide">
        <template #title>Slot: <a href>{{ titleSlot }}</a></template>
        <template #body>Slot: &#1083; {{ bodySlot }} &#1083; &#1083; &#1083;</template>
        <template #footer><button>{{ footerSlot }}</button></template>
      </ui-modal>
      <a href="" @click.prevent="toggle=!toggle">Toggle visible</a>
    </ui-inspector>
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
CustomSlots.parameters = {
  docs: {
    source: {
      code: `<ui-modal title="Custom Slots" scrollable show>
  <template #title>Some title</template>
  <template #body>Some body</template>
  <template #footer><button>Some button</button></template>
</ui-modal>`,
    },
  },
}
