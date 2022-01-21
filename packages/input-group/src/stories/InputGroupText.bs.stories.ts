import { InputGroupTextTypes } from '@unicodernsui/core'
import { UiInputGroupText, UiInputGroupTextModel } from '../'
import { UiCheckbox } from '@unicodernsui/checkbox'
import { UiInspector } from '@unicodernsui/code-highlight/src/dev'
import { UiInputGroupDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/InputGroupText',
  component: UiInputGroupText,
  argTypes: {
    renderAs: {
      control: { type: 'select' },
      options: Object.values(InputGroupTextTypes),
    },
  },
  parameters: {
    docs: {
      page: UiInputGroupDoc,
    },
  },
}

type StoryModel =
  | UiInputGroupTextModel
  | {
      renderAs: string
    }

const Template = (args: StoryModel) => ({
  components: { UiInputGroupText, UiCheckbox, UiInspector },
  setup() {
    return { args }
  },
  template: `
    <ui-inspector>
      <ui-input-group-text :="args">
        ${args.slotContent}
      </ui-input-group-text>
    </ui-inspector>
  `,
})

const baseArgs: StoryModel = {
  renderAs: InputGroupTextTypes.Span,
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
  slotContent: 'Span',
}
Default.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group-text>
  Span
</ui-input-group>
      `,
    },
  },
}

export const AsLabel = Template.bind({})
AsLabel.args = {
  ...baseArgs,
  slotContent: 'Label',
  renderAs: InputGroupTextTypes.Label,
}
AsLabel.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group-text render-as="label">
  Label
</ui-input-group>
      `,
    },
  },
}

export const AsDiv = Template.bind({})
AsDiv.args = {
  ...baseArgs,
  slotContent: 'Div',
  renderAs: InputGroupTextTypes.Div,
}
AsDiv.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group-text render-as="div">
  Div
</ui-input-group>
      `,
    },
  },
}

export const WithComponent = Template.bind({})
WithComponent.args = {
  ...baseArgs,
  slotContent: '<ui-checkbox></ui-checkbox>',
  renderAs: InputGroupTextTypes.Div,
}
WithComponent.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group-text render-as="div">
  <ui-checkbox></ui-checkbox>
</ui-input-group-text>
      `,
    },
  },
}
