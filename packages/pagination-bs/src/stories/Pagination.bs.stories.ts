import { provide, ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { InputSizeVariants, uiUseDarkThemeInjectionToken } from '@uicr/core'
import { UiPagination, UiPaginationModel } from '@uicr/pagination'
import { UiInspector } from '@uicr/code-highlight/src/dev'
import { install } from '..'

export default {
  title: 'Bootstrap/Pagination',
  component: UiPagination,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.values(InputSizeVariants),
    },
    itemsPerPage: { control: { type: 'number' } },
    totalItems: { control: { type: 'number' } },
    maxVisiblePages: { control: { type: 'number' } },
    ['aria:label']: { name: 'label (aria)', control: { type: 'text' } },
  },
}

type StoryModel =
  | UiPaginationModel
  | {
      page: number
      size: string
      itemsPerPage: number
      totalItems: number
      maxVisiblePages: number
    }
const page = ref(0)
const Template = (args: StoryModel, { globals }: { globals: any }) => ({
  components: { UiPagination, UiInspector },
  setup() {
    if (globals.backgrounds && globals.backgrounds.value !== 'transparent') {
      provide(uiUseDarkThemeInjectionToken, true)
    }
    install()

    return { args, page }
  },
  methods: {
    pageChange: (p: number): void => {
      page.value = p
    },
    rangeChange: action('range change'),
  },
  template: `
    <ui-inspector>
      <ui-pagination
        :="args"
        :page="page"
        @range-change="rangeChange"
        @page-change="pageChange"
      />
    </ui-inspector>
  `,
})

const baseArgs: StoryModel = {
  size: InputSizeVariants.Medium,
  page: 0,
  totalItems: 100,
  itemsPerPage: 5,
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
}
Default.parameters = {
  docs: {
    source: {
      code: '<ui-pagination></ui-pagination>',
    },
  },
}

export const Small = Template.bind({})
Small.args = {
  ...baseArgs,
  size: InputSizeVariants.Small,
}
Small.parameters = {
  docs: {
    source: {
      code: '<ui-pagination size="sm"></ui-pagination>',
    },
  },
}

export const Medium = Template.bind({})
Medium.args = {
  ...baseArgs,
}
Medium.parameters = {
  docs: {
    source: {
      code: '<ui-pagination size="md"></ui-pagination>',
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  size: InputSizeVariants.Large,
}
Large.parameters = {
  docs: {
    source: {
      code: '<ui-pagination size="lg"></ui-pagination>',
    },
  },
}

export const withMaxVisible = Template.bind({})
withMaxVisible.args = {
  ...baseArgs,
  maxVisiblePages: 5,
}
withMaxVisible.parameters = {
  docs: {
    source: {
      code: '<ui-pagination max-visible-pages="5"></ui-pagination>',
    },
  },
}
