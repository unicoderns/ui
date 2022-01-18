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
  argTypes: {},
  parameters: {
    docs: {
      page: UiCardDoc,
    },
  },
}

type StoryModel = UiCardModel | {}

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
      </ui-card-text></ui-card>
    </ui-inspector>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  header: 'Header',
  title: 'Primary card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Primary,
}
Primary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="primary" :header="header" :title="title" :background="background" :style="style"></ui-card>',
    },
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  header: 'Header',
  title: 'Secondary card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Secondary,
}
Secondary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="secondary" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const Success = Template.bind({})
Success.args = {
  header: 'Header',
  title: 'Success card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Success,
}
Success.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="success" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const Danger = Template.bind({})
Danger.args = {
  header: 'Header',
  title: 'Danger card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Danger,
}
Danger.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="danger" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  header: 'Header',
  title: 'Warning card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Warning,
}
Warning.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="warning" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const Info = Template.bind({})
Info.args = {
  header: 'Header',
  title: 'Info card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Info,
}
Info.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="info" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const Light = Template.bind({})
Light.args = {
  header: 'Header',
  title: 'Light card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Light,
}
Light.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="light" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const Dark = Template.bind({})
Dark.args = {
  header: 'Header',
  title: 'Dark card title',
  background: true,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Dark,
}
Dark.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="dark" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderPrimary = Template.bind({})
BorderPrimary.args = {
  header: 'Header',
  title: 'Primary card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Primary,
}
BorderPrimary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="primary" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderSecondary = Template.bind({})
BorderSecondary.args = {
  header: 'Header',
  title: 'Secondary card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Secondary,
}
BorderSecondary.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="secondary" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderSuccess = Template.bind({})
BorderSuccess.args = {
  header: 'Header',
  title: 'Success card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Success,
}
BorderSuccess.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="success" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderDanger = Template.bind({})
BorderDanger.args = {
  header: 'Header',
  title: 'Danger card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Danger,
}
BorderDanger.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="danger" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderWarning = Template.bind({})
BorderWarning.args = {
  header: 'Header',
  title: 'Warning card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Warning,
}
BorderWarning.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="warning" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderInfo = Template.bind({})
BorderInfo.args = {
  header: 'Header',
  title: 'Info card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Info,
}
BorderInfo.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="info" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderLight = Template.bind({})
BorderLight.args = {
  header: 'Header',
  title: 'Light card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Light,
}
BorderLight.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="light" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const BorderDark = Template.bind({})
BorderDark.args = {
  header: 'Header',
  title: 'Dark card title',
  background: false,
  style: 'width: 18rem;',
  variant: BootstrapVariants.Dark,
}
BorderDark.parameters = {
  docs: {
    source: {
      code:
        '<ui-card variant="dark" :header="header" :title="title" :background="background" :style="style></ui-card>',
    },
  },
}

export const TitlesAndText = Template.bind({})
TitlesAndText.args = {
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
  header: 'Featured',
  title: 'Special title',
  footer: '2 days ago',
  centerText: true,
}
HeaderAndFooter.parameters = {
  docs: {
    source: {
      code:
        '<ui-card :header="header" :title="title" :footer="footer"></ui-card>',
    },
  },
}
