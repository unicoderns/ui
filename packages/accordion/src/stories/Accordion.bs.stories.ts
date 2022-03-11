import { action } from '@storybook/addon-actions'
import {
  UiAccordion,
  UiAccordionModel,
  UiAccordionSection,
  UiAccordionSectionModel,
} from '..'
import { UiAccordionDoc } from '../dev'

export default {
  title: 'UI/Accordion',
  component: UiAccordion,
  argTypes: {
    label: { control: { type: 'text' } },
    flush: { control: { type: 'boolean' } },
    multiple: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      page: UiAccordionDoc,
    },
  },
}

type StorySectionModel = UiAccordionSectionModel & {
  body: string
}

type StoryModel = UiAccordionModel & {
  datasource: StorySectionModel[]
}

const Template = (args: StoryModel) => ({
  components: { UiAccordion, UiAccordionSection },
  setup() {
    const { datasource, ...newArgs } = args
    return { args: newArgs, datasource }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-accordion :="args" @click="click" >
      <ui-accordion-section v-for="item in datasource" :="item">{{ item.body }}</ui-accordion-section>
    </ui-accordion>
  `,
})

const baseArgs: StoryModel = {
  flush: false,
  multiple: false,
  datasource: [
    { title: 'one', body: 'First section', active: true },
    { title: 'two', body: 'Second section' },
    { title: 'three', body: 'Third section' },
  ],
}

export const Normal = Template.bind({})
Normal.args = {
  ...baseArgs,
}
Normal.parameters = {
  docs: {
    source: {
      code: `
<ui-accordion>
  <ui-accordion-section active title="one">First Section</ui-accordion-section>
  <ui-accordion-section title="two">Second Section</ui-accordion-section>
  <ui-accordion-section title="three">Third Section</ui-accordion-section>
</ui-accordion>`,
    },
  },
}

export const Flush = Template.bind({})
Flush.args = {
  ...baseArgs,
  flush: true,
}
Flush.parameters = {
  docs: {
    source: {
      code: `
<ui-accordion flush>
  <ui-accordion-section active title="one">First Section</ui-accordion-section>
  <ui-accordion-section title="two">Second Section</ui-accordion-section>
  <ui-accordion-section title="three">Third Section</ui-accordion-section>
</ui-accordion>`,
    },
  },
}

export const Multiple = Template.bind({})
Multiple.args = {
  ...baseArgs,
  multiple: true,
  datasource: [
    { title: 'one', body: 'First section', active: true },
    { title: 'two', body: 'Second section' },
    { title: 'three', body: 'Third section', active: true },
  ],
}
Multiple.parameters = {
  docs: {
    source: {
      code: `
<ui-accordion multiple>
  <ui-accordion-section active title="one">First Section</ui-accordion-section>
  <ui-accordion-section title="two">Second Section</ui-accordion-section>
  <ui-accordion-section active title="three">Third Section</ui-accordion-section>
</ui-accordion>`,
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...baseArgs,
  datasource: [
    { title: 'one', body: 'First section', active: true },
    { title: 'two', body: 'Second section' },
    { title: 'three', body: 'Third section', disabled: true },
  ],
}
Disabled.parameters = {
  docs: {
    source: {
      code: `
<ui-accordion multiple>
  <ui-accordion-section active title="one">First Section</ui-accordion-section>
  <ui-accordion-section title="two">Second Section</ui-accordion-section>
  <ui-accordion-section disabled title="three">Third Section</ui-accordion-section>
</ui-accordion>`,
    },
  },
}
