import { TabsPanelComponent, TabComponent } from '../../index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Bootstrap/Tabs',
  components: { TabsPanelComponent, TabComponent },
}

const Template = (args: any) => ({
  components: { TabsPanelComponent, TabComponent },
  setup() {
    return { args }
  },
  template: `
  <tabs-panel-component>
    <tab-component title="Tab 1">
      Hello From Tab 1
    </tab-component>
    <tab-component title="Tab 2" active="true">
      Hello From Tab 2
    </tab-component>
    <tab-component title="Tab 3" active="true">
      Hello From Tab 3
    </tab-component>
    <tab-component title="Tab 4" active="true" disabled="true">
      Hello From Tab 4
    </tab-component>
  </tabs-panel-component>`,
})

export const Default = Template.bind({})
Default.args = {}
