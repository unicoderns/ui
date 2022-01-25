import { provide, ref, watch } from 'vue'
import { InputTypes, uiUseDarkThemeInjectionToken } from '@uicr/core'
import { UiInput, UiInputModel } from '../'
import { UiInputDoc } from '../dev'
import { UiInspector } from '@uicr/code-highlight/src/dev'

export default {
  title: 'UI/Bootstrap/Input',
  component: UiInput,
  argTypes: {
    label: { control: { type: 'text' } },
    type: {
      control: { type: 'select' },
      options: Object.values(InputTypes),
    },
    disabled: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      page: UiInputDoc,
    },
  },
}

type StoryModel =
  | UiInputModel
  | {
      type: string
      disabled: boolean
    }

const Template = (args: UiInputModel, { globals }: { globals: any }) => ({
  components: { UiInput, UiInspector },
  setup() {
    if (globals.backgrounds && globals.backgrounds.value !== 'transparent') {
      provide(uiUseDarkThemeInjectionToken, true)
    }
    const text = ref('')
    watch(text, () => {
      console.log(text.value)
    })
    return { args, text }
  },
  template: `
    <ui-inspector>
      <ui-input :="args" v-model="text"></ui-input>
    </ui-inspector>
  `,
})

export const Email = Template.bind({})
Email.args = {
  label: 'Email address',
  type: InputTypes.Email,
  disabled: false,
}
Email.parameters = {
  docs: {
    source: {
      code:
        '<ui-input label="Email address" type="email" disabled="false"></ui-input>',
    },
  },
}

export const Password = Template.bind({})
Password.args = {
  label: 'Password',
  type: InputTypes.Password,
  disabled: false,
}
Password.parameters = {
  docs: {
    source: {
      code:
        '<ui-input label="Password" type="password" disabled="false"></ui-input>',
    },
  },
}

export const Text = Template.bind({})
Text.args = {
  label: 'Text input',
  type: InputTypes.Text,
  disabled: false,
}
Text.parameters = {
  docs: {
    source: {
      code:
        '<ui-input label="Text input" type="text" disabled="false"></ui-input>',
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled input',
  type: InputTypes.Text,
  disabled: true,
}
Disabled.parameters = {
  docs: {
    source: {
      code:
        '<ui-input label="Disabled input" type="text" disabled="true"></ui-input>',
    },
  },
}
