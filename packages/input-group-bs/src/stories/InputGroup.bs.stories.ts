import { InputSizeVariants } from '@uicr/core'
import { UiButton } from '@uicr/button'
import { UiSelect } from '@uicr/select'
import { UiCheckbox } from '@uicr/checkbox'
import { UiRadio } from '@uicr/radio'
import { UiInspector } from '@uicr/code-highlight/src/dev'
import {
  UiInputGroup,
  UiInputGroupText,
  UiInputGroupModel,
} from '@uicr/input-group'

export default {
  title: 'UI/Bootstrap/InputGroup',
  component: UiInputGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(InputSizeVariants),
    },
    ['aria:role']: { name: 'role (aria)', control: { type: 'text' } },
  },
  parameters: {
    docs: {
      page: UiInputGroupDoc,
    },
  },
}

type StoryModel =
  | UiInputGroupModel
  | {
      size: string
      label: string
    }

const Template = (args: StoryModel) => ({
  components: {
    UiInputGroup,
    UiInputGroupText,
    UiButton,
    UiSelect,
    UiCheckbox,
    UiRadio,
    UiInspector,
  },
  setup() {
    return { args }
  },
  template: `
    <ui-inspector>
      <ui-input-group :="args">
        ${args.slotContent}
      </ui-input-group>
    </ui-inspector>
  `,
})

const baseArgs: StoryModel = {
  size: InputSizeVariants.Medium,
}

export const Label = Template.bind({})
Label.args = {
  ...baseArgs,
  label: 'Your URL',
  slotContent: `
    <ui-input-group-text>
      https://example.com/users/
    </ui-input-group-text>
    <input type="email" class="form-control">
  `,
}
Label.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group size="sm">
  <ui-input-group-text>
    Small
  </ui-input-group-text>
  <input type="text" class="form-control">
</ui-input-group>
      `,
    },
  },
}

export const Small = Template.bind({})
Small.args = {
  ...baseArgs,
  size: InputSizeVariants.Small,
  slotContent: `
    <ui-input-group-text>
      Small
    </ui-input-group-text>
    <input type="text" class="form-control">
  `,
}
Small.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group size="sm">
  <ui-input-group-text>
    Small
  </ui-input-group-text>
  <input type="text" class="form-control">
</ui-input-group>
      `,
    },
  },
}

export const Medium = Template.bind({})
Medium.args = {
  ...baseArgs,
  size: InputSizeVariants.Medium,
  slotContent: `
    <ui-input-group-text>
      Medium
    </ui-input-group-text>    
    <input type="text" class="form-control">
  `,
}
Medium.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group size="md">
  <ui-input-group-text>
    Medium
  </ui-input-group-text>
  <input type="text" class="form-control">
</ui-input-group>
      `,
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  size: InputSizeVariants.Large,
  slotContent: `
    <ui-input-group-text>
      Large
    </ui-input-group-text>
    <input type="text" class="form-control">
  `,
}
Large.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group size="lg">
  <ui-input-group-text>
    Large
  </ui-input-group-text>
  <input type="text" class="form-control">
</ui-input-group>
      `,
    },
  },
}

export const Wrapping = Template.bind({})
Wrapping.args = {
  ...baseArgs,
  nowrap: true,
  slotContent: `
  <ui-input-group-text>
    @
  </ui-input-group-text>
  <input type="text" class="form-control" placeholder="Username">
  `,
}
Wrapping.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group nowrap>
  <ui-input-group-text>
    @
  </ui-input-group-text>
  <input type="text" class="form-control" placeholder="Username">
</ui-input-group>
      `,
    },
  },
}

export const CustomSelect = Template.bind({})
CustomSelect.args = {
  ...baseArgs,
  slotContent: `
    <ui-button variant="secondary" outline>Button</ui-button>
    <ui-select></ui-select>
    <ui-input-group-text>
      Options
    </ui-input-group-text>
  `,
}
CustomSelect.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group label="Label">
<ui-button variant="secondary" outline>Button</ui-button>
  <ui-select></ui-select>
</ui-input-group>
<ui-input-group-text>Options<ui-input-group-text>
      `,
    },
  },
}

export const CustomSelectAlt = Template.bind({})
CustomSelectAlt.args = {
  ...baseArgs,
  slotContent: `
    <ui-input-group-text>
      Options
    </ui-input-group-text>
    <ui-select></ui-select>
    <ui-button variant="secondary" outline>Button</ui-button>
  `,
}
CustomSelectAlt.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group label="Label">
  <ui-input-group-text>
    Options
  </ui-input-group-text>
  <ui-button variant="secondary" outline>Button</ui-button>
  <ui-select></ui-select>
</ui-input-group>
      `,
    },
  },
}

export const Checkboxes = Template.bind({})
Checkboxes.args = {
  ...baseArgs,
  slotContent: `
    <ui-input-group-text render-as="div">
      <ui-checkbox></ui-checkbox>
    </ui-input-group-text>
    <input type="text" class="form-control">
  `,
}
Checkboxes.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group label="Label">
  <ui-input-group-text render-as="div">
    <ui-checkbox></ui-checkbox>
  </ui-input-group-text>
  <input type="text" class="form-control">
</ui-input-group>
      `,
    },
  },
}

export const Radios = Template.bind({})
Radios.args = {
  ...baseArgs,
  slotContent: `
    <ui-input-group-text render-as="div">
      <ui-radio></ui-radio>
    </ui-input-group-text>
    <input type="text" class="form-control">
  `,
}
Radios.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group label="Label">
  <ui-input-group-text render-as="div">
    <ui-radio></ui-radio>
  </ui-input-group-text>
  <input type="text" class="form-control">
</ui-input-group>
      `,
    },
  },
}

export const MutipleInputs = Template.bind({})
MutipleInputs.args = {
  ...baseArgs,
  slotContent: `
    <ui-input-group-text>
      First and last name
    </ui-input-group-text>
    <input type="text" aria-label="First name" class="form-control">
    <input type="text" aria-label="Last name" class="form-control">
  `,
}
MutipleInputs.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group label="Label">
  <ui-input-group-text>
    First and last name
  </ui-input-group-text>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</ui-input-group>
      `,
    },
  },
}

export const MutipleAddons = Template.bind({})
MutipleAddons.args = {
  ...baseArgs,
  slotContent: `
    <ui-input-group-text>
      $
    </ui-input-group-text>
    <ui-input-group-text>
      0.00
    </ui-input-group-text>
    <input type="text" class="form-control">
  `,
}
MutipleAddons.parameters = {
  docs: {
    source: {
      code: `
<ui-input-group label="Label">
  <ui-input-group-text>
    $
  </ui-input-group-text>
  <ui-input-group-text>
    0.00
  </ui-input-group-text>
  <input type="text" class="form-control">
</ui-input-group>
      `,
    },
  },
}
