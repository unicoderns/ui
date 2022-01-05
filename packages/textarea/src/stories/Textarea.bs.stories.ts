import { ref } from 'vue'
import { InputSizeVariants } from '@unicodernsui/core'
import { UiTextarea, UiTextareaModel } from '../'
import { UiInspector } from '@unicodernsui/code-highlight/src/dev'
import { UiTextareaDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Textarea',
  component: UiTextarea,
  argTypes: {
    label: { control: { type: 'text' } },
    inputGroupText: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(InputSizeVariants),
    },
    disabled: { control: { type: 'boolean' } },
    maxLength: { control: { type: 'number' } },
    ['aria:role']: { name: 'role (aria)', control: { type: 'text' } },
  },
  parameters: {
    docs: {
      page: UiTextareaDoc,
    },
  },
}

type StoryModel =
  | UiTextareaModel
  | {
      label: string
      inputGroupText: string
      disabled: boolean
      size: string
      maxLength: string
    }

const Template = (args: StoryModel) => ({
  components: { UiTextarea, UiInspector },
  setup() {
    const content = ref('')
    return { args, content }
  },
  template: `
    <ui-inspector>
      <ui-textarea 
        :="args" 
        :disabled=${args.disabled} 
        :max-length=${args.maxLength} 
        size=${args.size} 
        input-group-text=${args.inputGroupText}
        v-model:content="content"
      >
      </ui-textarea>
      <div v-if=${args.showBinding}>
        <input type="text" :value="content" placeholder="Bind content will be shown here" class="form-control mt-2"/>
      </div>
    </ui-inspector>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  inputGroupText: 'Textarea',
  size: InputSizeVariants.Medium,
}

export const Small = Template.bind({})
Small.args = {
  ...baseArgs,
  size: InputSizeVariants.Small,
  label: 'Small',
}
Small.parameters = {
  docs: {
    source: {
      code: '<ui-textarea size="sm"></ui-textarea>',
    },
  },
}

export const Medium = Template.bind({})
Medium.args = {
  ...baseArgs,
  size: InputSizeVariants.Medium,
  label: 'Default',
}
Medium.parameters = {
  docs: {
    source: {
      code: '<ui-textarea size="md"></ui-textarea>',
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  size: InputSizeVariants.Large,
  label: 'Large',
}
Large.parameters = {
  docs: {
    source: {
      code: '<ui-textarea size="lg"></ui-textarea>',
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
      code: '<ui-textarea disabled></ui-textarea>',
    },
  },
}

export const WithMaxLength = Template.bind({})
WithMaxLength.args = {
  ...baseArgs,
  label: 'With max length',
  maxLength: '15',
}
WithMaxLength.parameters = {
  docs: {
    source: {
      code: '<ui-textarea max-length="15"></ui-textarea>',
    },
  },
}

export const WithBinding = Template.bind({})
WithBinding.args = {
  ...baseArgs,
  showBinding: true,
}
WithBinding.parameters = {
  docs: {
    source: {
      code: `
<ui-textarea v-model:content="content"></ui-textarea>
<div>
  <input type="text" :value="content" placeholder="Bind content will be shown here"/>
</div>
      `,
    },
  },
}
