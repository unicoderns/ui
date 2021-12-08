import { action } from '@storybook/addon-actions'
import { UiTabs, UiTab } from '@unicodernsui/tabs'
import { UiCodeHighlight } from '../'

export default {
  title: 'UI/Bootstrap/CodeHighlight',
  components: { UiCodeHighlight, UiTabs, UiTab },
}

const Template = (args: any) => ({
  components: { UiCodeHighlight, UiTabs, UiTab },
  setup() {
    return { args }
  },
  methods: {
    select: action('select'),
  },
  template: `
  <ui-code-highlight>
    <ui-tabs @select="select">
        <ui-tab title="Tab 1">
        Hello From Tab 1
        </ui-tab>
        <ui-tab title="Tab 2">
        Hello From Tab 2
        </ui-tab>
        <ui-tab title="Tab 3" :active="true">
        Hello From Tab 3
        </ui-tab>
        <ui-tab title="Tab 4" :disabled="true">
        Hello From Tab 4
        </ui-tab>
    </ui-tabs>
 </ui-code-highlight>`,
})

export const Default = Template.bind({})
Default.args = {}
