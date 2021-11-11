import { TabsPanelComponent, TabComponent } from '../index';

export default {
  title: 'UI/Tabs',
  components: { TabsPanelComponent, TabComponent },
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TabsPanelComponent, TabComponent },
  /*
  components: {
    UiBtn: ButtonControlComponent,
  },
  */
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<tabs-panel-component>
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
});

export const Default = Template.bind({});
Default.args = {
};