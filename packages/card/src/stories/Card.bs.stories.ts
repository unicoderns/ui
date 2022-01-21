import { provide } from 'vue'
import {
  BootstrapVariants,
  uiUseDarkThemeInjectionToken,
} from '@unicodernsui/core'
import { UiCard, UiCardText, UiCardModel } from '../'
import { UiCardDoc } from '../dev'
import { UiInspector } from '@unicodernsui/code-highlight/src/dev'

export default {
  title: 'UI/Bootstrap/Card',
  component: UiCard,
  argTypes: {
    header: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    footer: { control: { type: 'text' } },
    background: { control: { type: 'boolean' } },
    centerText: { control: { type: 'boolean' } },
    imgBottom: { control: { type: 'boolean' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
  },
  parameters: {
    docs: {
      page: UiCardDoc,
    },
  },
}

type StoryModel =
  | UiCardModel
  | {
      style: string
      title: string
      subtitle: string
      header: string
      footer: string
      imgSrc: string
      imgAlt: string
      imgBottom: boolean
      centerText: boolean
      outline: boolean
    }

const Template = (args: StoryModel, { globals }: { globals: any }) => ({
  components: { UiCard, UiCardText, UiInspector },
  setup() {
    if (globals.backgrounds && globals.backgrounds.value !== 'transparent') {
      provide(uiUseDarkThemeInjectionToken, true)
    }

    return { args }
  },
  template: `
    <ui-inspector>
      <ui-card :="args">
        <ui-card-text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </ui-card-text>
      </ui-card>
    </ui-inspector>
  `,
})

const baseArgs: StoryModel = {
  style: '',
  title: '',
  subtitle: '',
  header: '',
  footer: '',
  imgSrc: '',
  imgAlt: '',
  imgBottom: false,
  centerText: false,
  outline: false,
}

export const Primary = Template.bind({})
Primary.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Primary card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Primary,
}
Primary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="primary" :header="header" :title="title" :outline="outline" :style="style"></ui-card>',
    },
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Secondary card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Secondary,
}
Secondary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="secondary" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const Success = Template.bind({})
Success.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Success card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Success,
}
Success.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="success" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const Danger = Template.bind({})
Danger.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Danger card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Danger,
}
Danger.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="danger" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Warning card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Warning,
}
Warning.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="warning" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Info card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Info,
}
Info.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="info" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Light card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Light,
}
Light.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="light" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const Dark = Template.bind({})
Dark.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Dark card title',
  outline: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Dark,
}
Dark.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="dark" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlinePrimary = Template.bind({})
OutlinePrimary.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Primary card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Primary,
}
OutlinePrimary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="primary" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlineSecondary = Template.bind({})
OutlineSecondary.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Secondary card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Secondary,
}
OutlineSecondary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="secondary" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlineSuccess = Template.bind({})
OutlineSuccess.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Success card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Success,
}
OutlineSuccess.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="success" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlineDanger = Template.bind({})
OutlineDanger.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Danger card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Danger,
}
OutlineDanger.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="danger" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlineWarning = Template.bind({})
OutlineWarning.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Warning card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Warning,
}
OutlineWarning.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="warning" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlineInfo = Template.bind({})
OutlineInfo.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Info card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Info,
}
OutlineInfo.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="info" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Light card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Light,
}
OutlineLight.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="light" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  ...baseArgs,
  header: 'Header',
  title: 'Dark card title',
  outline: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Dark,
}
OutlineDark.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="dark" :header="header" :title="title" :outline="outline" :style="style></ui-card>',
    },
  },
}

export const TitlesAndText = Template.bind({})
TitlesAndText.args = {
  ...baseArgs,
  title: 'Card title',
  subtitle: 'Card subtitle',
  style: 'width: 18rem;',
}
TitlesAndText.parameters = {
  docs: {
    source: {
      code:
        '<ui-card :title="title" :subtitle="subtitle" :style="style></ui-card>',
    },
  },
}

export const ImageTop = Template.bind({})
ImageTop.args = {
  ...baseArgs,
  imgSrc: 'https://picsum.photos/600/300/?image=25',
  style: 'width: 18rem;',
}
ImageTop.parameters = {
  docs: {
    source: {
      code: '<ui-card :img-src="imgSrc"></ui-card>',
    },
  },
}

export const ImageBottom = Template.bind({})
ImageBottom.args = {
  ...baseArgs,
  imgSrc: 'https://picsum.photos/600/300/?image=25',
  imgBottom: true,
  style: 'width: 18rem;',
}
ImageBottom.parameters = {
  docs: {
    source: {
      code: `<ui-card :img-src="imgSrc" :img-bottom="imgBottom">
        </ui-card>`,
    },
  },
}

export const HeaderAndFooter = Template.bind({})
HeaderAndFooter.args = {
  ...baseArgs,
  header: 'Featured',
  title: 'Special title',
  footer: '2 days ago',
  centerText: true,
}
HeaderAndFooter.parameters = {
  docs: {
    source: {
      code:
        '<ui-card :header="header" :title="title" :footer="footer" :centerText="centerText"></ui-card>',
    },
  },
}
