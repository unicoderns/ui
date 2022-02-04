import { ref } from 'vue'
import { UiInspector } from '@uicr/code-highlight/src/dev'
import { UiTextarea, UiTextareaModel } from '@uicr/textarea'

export default {
  title: 'Bootstrap/Textarea',
  component: UiTextarea,
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    maxLength: { control: { type: 'number' } },
    ['aria:role']: { name: 'role (aria)', control: { type: 'text' } },
  },
}

type StoryModel =
  | UiTextareaModel
  | {
      label: string
      disabled: boolean
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
        label=${args.label}
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
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
  label: 'Default',
}
Default.parameters = {
  docs: {
    source: {
      code: '<ui-textarea size="md"></ui-textarea>',
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
