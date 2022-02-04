import { action } from '@storybook/addon-actions'
import { ref, watch } from 'vue'
import { UiRadio, UiRadioModel } from '@uicr/radio'
import { install } from '..'

export default {
  title: 'Bootstrap/Radio',
  component: UiRadio,
  argTypes: {
    label: { control: { type: 'text' } },
    ['aria:label']: { name: 'label (aria)', control: { type: 'text' } },
  },
}

type StoryModel = UiRadioModel & {
  label: string
}

const Template = (args: StoryModel) => ({
  components: { UiRadio },
  setup() {
    const { label, ...newArgs } = args
    const value = ref('two')
    watch(value, v => action('updated:modelValue')(v))
    install()

    return { args: newArgs, label, value }
  },
  template: `
    <div v-if="label">
      <ui-radio :="args" v-model="value" value="one">One</ui-radio>
      <ui-radio :="args" v-model="value" value="two">Two</ui-radio>
    </div>
    <div v-else>
      <ui-radio :="args" v-model="value" value="one"></ui-radio>
      <ui-radio :="args" v-model="value" value="two"></ui-radio>
    </div>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  groupName: 'Group',
}

export const Regular = Template.bind({})
Regular.args = {
  ...baseArgs,
  label: 'Regular',
}
Regular.parameters = {
  docs: {
    source: {
      code: `
<ui-radio groupName="some group">Regular</ui-radio>
`,
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...baseArgs,
  disabled: true,
  label: 'Disabled',
}
Disabled.parameters = {
  docs: {
    source: {
      code: '<ui-radio groupName="some group" disabled>Disabled</ui-radio>',
    },
  },
}

export const Inline = Template.bind({})
Inline.args = {
  ...baseArgs,
  inline: true,
  label: 'Inline',
}
Inline.parameters = {
  docs: {
    source: {
      code: '<ui-radio groupName="some group" inline>Inline</ui-radio>',
    },
  },
}

export const Switch = Template.bind({})
Switch.args = {
  ...baseArgs,
  switch: true,
  label: 'Switch',
}
Switch.parameters = {
  docs: {
    source: {
      code: '<ui-radio groupName="some group" switch>Switch</ui-radio>',
    },
  },
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  ...baseArgs,
  label: undefined,
}
NoLabel.parameters = {
  docs: {
    source: {
      code: '<ui-radio></ui-radio>',
    },
  },
}
