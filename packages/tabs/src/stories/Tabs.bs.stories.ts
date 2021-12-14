import { action } from '@storybook/addon-actions'
import { UiTabs, UiTab } from '../'
import { UiTabsDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Tabs',
  components: { UiTabs, UiTab },
  parameters: {
    docs: {
      page: UiTabsDoc,
    },
  },
}

type StoryModel = {
  tab1: string
  tab1Active: boolean
  tab1Disabled: boolean
  tab2: string
  tab2Active: boolean
  tab2Disabled: boolean
  tab3: string
  tab3Active: boolean
  tab3Disabled: boolean
  tab4: string
  tab4Active: boolean
  tab4Disabled: boolean
}

const Template = (args: StoryModel) => ({
  components: { UiTabs, UiTab },
  setup() {
    return { args }
  },
  methods: {
    select: action('select'),
  },
  template: `
  <ui-tabs @select="select">
    <ui-tab title="${args.tab1}" :active="args.tab1Active" :disabled="args.tab1Disabled">
      Hello From Tab 1
    </ui-tab>
    <ui-tab title="${args.tab2}" :active="args.tab2Active" :disabled="args.tab2Disabled">
      Hello From Tab 2
    </ui-tab>
    <ui-tab title="${args.tab3}" :active="args.tab3Active" :disabled="args.tab3Disabled">
      Hello From Tab 3
    </ui-tab>
    <ui-tab title="${args.tab4}" :active="args.tab4Active" :disabled="args.tab4Disabled">
      Hello From Tab 4
    </ui-tab>
  </ui-tabs>`,
})

const baseArgs: StoryModel = {
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
