import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { ModalSizeVariants, ResponsiveVariants } from '@uicr/core'
import { UiInspector } from '@uicr/code-highlight/src/dev'
import { UiModal, UiModalModel } from '../'
import { UiModalDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Modal',
  component: UiModal,
  argTypes: {
    title: { control: { type: 'text' } },
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

type StoryModel = UiModalModel & { label: string }

const Template = (args: StoryModel) => ({
  components: { UiModal, UiInspector },
  setup() {
    const toggle = ref(false)
    const { label, ...newArgs } = args

    return { args: newArgs, label, toggle }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
  },
  template: `
    <ui-inspector>
      <ui-modal :="args" :show="toggle" @show="show" @close="close() & (toggle = false)" @hide="hide">
        Some body
        <button>Some button</button>
      </ui-modal>
      <a href="" @click.prevent="toggle=!toggle">Toggle visible {{ label }}</a>
    </ui-inspector>
  `,
})

const baseArgs: StoryModel = {
  title: 'Some title',
  body: undefined,
  animate: true,
  dismissible: false,
  disableBackdrop: false,
  disableEscKey: false,
  autoFocus: false,
  scrollable: false,
  verticalCenter: false,
  fullscreen: false,
  show: true,
  label: '',
}

export const Normal = Template.bind({})
Normal.args = {
  ...baseArgs,
}
Normal.parameters = {
  docs: {
    source: {
      code: '<ui-modal title="Some title" show>Some body</ui-modal>',
    },
  },
}

export const Small = Template.bind({})
Small.args = {
  ...baseArgs,
  size: ModalSizeVariants.Small,
  label: 'small',
}
Small.parameters = {
  docs: {
    source: {
      code: '<ui-modal title="Small" size="sm" show>Some body</ui-modal>',
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  size: ModalSizeVariants.Large,
  label: 'large',
}
Large.parameters = {
  docs: {
    source: {
      code: '<ui-modal title="Large" size="lg" show>Some body</ui-modal>',
    },
  },
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  ...baseArgs,
  size: ModalSizeVariants.ExtraLarge,
  label: 'extra large',
}
ExtraLarge.parameters = {
  docs: {
    source: {
      code: '<ui-modal title="Extra Large" size="xl" show>Some body</ui-modal>',
    },
  },
}

export const Fullscreen = Template.bind({})
Fullscreen.args = {
  ...baseArgs,
  fullscreen: true,
  dismissible: true,
  label: 'fullscreen',
}
Fullscreen.parameters = {
  docs: {
    source: {
      code:
        '<ui-modal title="Fullscreen" fullscreen dismissible show>Some body</ui-modal>',
    },
  },
}

export const Dismissible = Template.bind({})
Dismissible.args = {
  ...baseArgs,
  dismissible: true,
  label: 'dismissible',
}
Dismissible.parameters = {
  docs: {
    source: {
      code:
        '<ui-modal title="Dismissible" dismissible show>Some body</ui-modal>',
    },
  },
}

export const DisableBackdrop = Template.bind({})
DisableBackdrop.args = {
  ...baseArgs,
  dismissible: true,
  disableBackdrop: true,
  disableEscKey: true,
  label: 'disable backdrop and esc key',
}
DisableBackdrop.parameters = {
  docs: {
    source: {
      code:
        '<ui-modal title="Disable Backdrop" disableBackdrop disableEscKey show>Some body</ui-modal>',
    },
  },
}

export const VerticalCenter = Template.bind({})
VerticalCenter.args = {
  ...baseArgs,
  verticalCenter: true,
  label: 'vertical center',
}
VerticalCenter.parameters = {
  docs: {
    source: {
      code:
        '<ui-modal title="Vertical Center" verticalCenter show>Some body</ui-modal>',
    },
  },
}

export const Autofocus = Template.bind({})
Autofocus.args = {
  ...baseArgs,
  autoFocus: true,
  label: 'autofocus',
}
Autofocus.parameters = {
  docs: {
    source: {
      code: '<ui-modal title="Autofocus" autofocus show>Some body</ui-modal>',
    },
  },
}

export const Scrollable = Template.bind({})
Scrollable.args = {
  ...baseArgs,
  scrollable: true,
  label: 'scrollable',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nunc at odio auctor faucibus et non leo. Praesent non tempor turpis, at cursus est. Cras cursus, ligula ut fermentum lobortis, mi sem bibendum neque, vitae tempus urna orci vel dui. Donec molestie purus ut ipsum placerat convallis. Donec pellentesque metus a massa dignissim, quis congue elit maximus. Vivamus lobortis luctus diam id tincidunt. Integer tincidunt est sagittis, tempor velit at, auctor risus. Vivamus eget lectus sapien. Morbi augue nisl, dictum eu tempor porta, pharetra nec mi. Mauris volutpat erat eget lorem placerat cursus non id mi.

Aliquam vitae nisl magna. Proin vulputate erat felis, nec interdum lacus gravida et. Fusce rutrum sollicitudin nulla at efficitur. Integer eget rutrum tortor, quis auctor purus. Ut congue nibh non nisl eleifend, a tincidunt erat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sagittis viverra felis, venenatis faucibus ante vestibulum et. Aenean at tortor eleifend, hendrerit tortor eget, pellentesque mi.

Sed condimentum velit dapibus rutrum porta. Donec consequat vel mi et fringilla. Vestibulum velit ex, posuere vel bibendum a, ornare a sem. Nam eu magna nunc. Nam rutrum nisi tellus, nec feugiat lacus posuere sit amet. Duis tempor ipsum sed tellus venenatis interdum. Maecenas eleifend augue pulvinar ligula ultricies, eget placerat felis gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed enim lorem, molestie ut ante faucibus, dapibus laoreet elit. Suspendisse elit enim, dapibus non metus at, molestie elementum est. Sed consectetur, ex nec pulvinar convallis, nisl justo tincidunt mauris, ut dignissim arcu leo ut ipsum. Nullam pellentesque, augue ac tempus lacinia, arcu velit tincidunt ipsum, non euismod tellus lectus a arcu.

Duis ut justo sit amet velit tempor viverra sit amet sed massa. Suspendisse potenti. Aenean elit orci, venenatis quis ex a, finibus faucibus dolor. Curabitur ut porttitor massa. Fusce facilisis odio felis, sit amet porta justo scelerisque ac. Duis purus lectus, consectetur vel mauris et, euismod porta libero. Proin nibh libero, dapibus vel vulputate hendrerit, tempor rhoncus eros. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Donec semper commodo urna, ut iaculis nisi iaculis vitae. Vivamus pulvinar purus ex, sed porta felis gravida vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum imperdiet mauris ex, ut venenatis leo tristique a. Aliquam erat volutpat. Nulla quis accumsan ipsum. Morbi diam quam, sodales id est a, pulvinar accumsan diam. Vestibulum interdum quam molestie, sodales purus non, aliquam sem. Curabitur sit amet accumsan lorem, nec porttitor diam. Curabitur sagittis consectetur ligula at cursus. Vivamus ullamcorper rutrum accumsan. Praesent consectetur bibendum varius. Nulla quis lorem lacinia erat scelerisque fringilla at accumsan elit. Nam sollicitudin ante at nulla elementum, ut pellentesque risus tristique. Aenean et interdum metus, et porttitor diam.
  `,
}

Scrollable.parameters = {
  docs: {
    source: {
      code: `<ui-modal title="Scrollable" scrollable show>"
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nunc at odio auctor faucibus et non leo. Praesent non tempor turpis, at cursus est. Cras cursus, ligula ut fermentum lobortis, mi sem bibendum neque, vitae tempus urna orci vel dui. Donec molestie purus ut ipsum placerat convallis. Donec pellentesque metus a massa dignissim, quis congue elit maximus. Vivamus lobortis luctus diam id tincidunt. Integer tincidunt est sagittis, tempor velit at, auctor risus. Vivamus eget lectus sapien. Morbi augue nisl, dictum eu tempor porta, pharetra nec mi. Mauris volutpat erat eget lorem placerat cursus non id mi.

Aliquam vitae nisl magna. Proin vulputate erat felis, nec interdum lacus gravida et. Fusce rutrum sollicitudin nulla at efficitur. Integer eget rutrum tortor, quis auctor purus. Ut congue nibh non nisl eleifend, a tincidunt erat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sagittis viverra felis, venenatis faucibus ante vestibulum et. Aenean at tortor eleifend, hendrerit tortor eget, pellentesque mi.

Sed condimentum velit dapibus rutrum porta. Donec consequat vel mi et fringilla. Vestibulum velit ex, posuere vel bibendum a, ornare a sem. Nam eu magna nunc. Nam rutrum nisi tellus, nec feugiat lacus posuere sit amet. Duis tempor ipsum sed tellus venenatis interdum. Maecenas eleifend augue pulvinar ligula ultricies, eget placerat felis gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed enim lorem, molestie ut ante faucibus, dapibus laoreet elit. Suspendisse elit enim, dapibus non metus at, molestie elementum est. Sed consectetur, ex nec pulvinar convallis, nisl justo tincidunt mauris, ut dignissim arcu leo ut ipsum. Nullam pellentesque, augue ac tempus lacinia, arcu velit tincidunt ipsum, non euismod tellus lectus a arcu.

Duis ut justo sit amet velit tempor viverra sit amet sed massa. Suspendisse potenti. Aenean elit orci, venenatis quis ex a, finibus faucibus dolor. Curabitur ut porttitor massa. Fusce facilisis odio felis, sit amet porta justo scelerisque ac. Duis purus lectus, consectetur vel mauris et, euismod porta libero. Proin nibh libero, dapibus vel vulputate hendrerit, tempor rhoncus eros. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Donec semper commodo urna, ut iaculis nisi iaculis vitae. Vivamus pulvinar purus ex, sed porta felis gravida vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum imperdiet mauris ex, ut venenatis leo tristique a. Aliquam erat volutpat. Nulla quis accumsan ipsum. Morbi diam quam, sodales id est a, pulvinar accumsan diam. Vestibulum interdum quam molestie, sodales purus non, aliquam sem. Curabitur sit amet accumsan lorem, nec porttitor diam. Curabitur sagittis consectetur ligula at cursus. Vivamus ullamcorper rutrum accumsan. Praesent consectetur bibendum varius. Nulla quis lorem lacinia erat scelerisque fringilla at accumsan elit. Nam sollicitudin ante at nulla elementum, ut pellentesque risus tristique. Aenean et interdum metus, et porttitor diam.
"</ui-modal>`,
    },
  },
}
