import { TabsPanelComponent, TabComponent } from '../../index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Bootstrap/Tabs',
  components: { TabsPanelComponent, TabComponent },
  argTypes: {
    title: { control: { type: 'text' } },
    body: { control: { type: 'text' } },
  },
}

const Template = (args: any) => ({
  components: { TabsPanelComponent, TabComponent },
  setup() {
    return { args }
  },
  methods: {
    select: action('select'),
  },
  template: `
  <tabs-panel-component @select="select">
    <tab-component title="${args.tab1}" :active="args.tab1Active" :disabled="args.tab1Disabled">
      Hello From Tab 1
    </tab-component>
    <tab-component title="${args.tab2}" :active="args.tab2Active" :disabled="args.tab2Disabled">
      Hello From Tab 2
    </tab-component>
    <tab-component title="${args.tab3}" :active="args.tab3Active" :disabled="args.tab3Disabled">
      Hello From Tab 3
    </tab-component>
    <tab-component title="${args.tab4}" :active="args.tab4Active" :disabled="args.tab4Disabled">
      Hello From Tab 4
    </tab-component>
  </tabs-panel-component>`,
})

const baseArgs: any = {
  tab1: 'Tab 1',
  tab1Active: false,
  tab1Disabled: false,
  tab2: 'Tab 2',
  tab2Active: true,
  tab2Disabled: false,
  tab3: 'Tab 3',
  tab3Active: true,
  tab3Disabled: false,
  tab4: 'Tab 4',
  tab4Active: false,
  tab4Disabled: true,
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
}
