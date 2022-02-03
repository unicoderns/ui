import { action } from '@storybook/addon-actions'
import { UiCheckbox, UiCheckboxModel } from '@uicr/checkbox'

export default {
  title: 'Bootstrap/Checkbox',
  component: UiCheckbox,
  argTypes: {
    label: { control: { type: 'text' } },
    ['aria:label']: { name: 'label (aria)', control: { type: 'text' } },
  },
}

type StoryModel = UiCheckboxModel & {
  label: string
}

const Template = (args: StoryModel) => ({
  components: { UiCheckbox },
  setup() {
    const { label, ...newArgs } = args
    return { args: newArgs, label }
  },
  methods: {
    modelValue: action('updated:modelValue'),
  },
  template: `
    <div v-if="label">
      <ui-checkbox :="args" @update:modelValue="modelValue">{{ label }}</ui-checkbox>
      <ui-checkbox :="args" :modelValue="true" @update:modelValue="modelValue">{{ label }} checked</ui-checkbox>
    </div>
    <div v-else>
      <ui-checkbox :="args" @update:modelValue="modelValue"></ui-checkbox>
      <ui-checkbox :="args" :modelValue="true" @update:modelValue="modelValue"></ui-checkbox>
    </div>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
}

export const Regular = Template.bind({})
Regular.args = {
  ...baseArgs,
  label: 'Regular',
}
Regular.parameters = {
  docs: {
    source: {
      code: '<ui-checkbox>Regular</ui-checkbox>',
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
      code: '<ui-checkbox disabled>Disabled</ui-checkbox>',
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
      code: '<ui-checkbox inline>Inline</ui-checkbox>',
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
      code: '<ui-checkbox switch>Switch</ui-checkbox>',
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
      code: '<ui-checkbox></ui-checkbox>',
    },
  },
}
