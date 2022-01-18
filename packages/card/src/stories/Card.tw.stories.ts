import { provide } from 'vue'
import { action } from '@storybook/addon-actions'
import { setComponentThemeConfig, uiUseDarkThemeInjectionToken } from '@unicodernsui/core'
import { TailwindVariants } from '@unicodernsui/custom-theme'
import { twUiCardThemeConfigDefaults } from './tw-ui-card-theme.config'
import { UiCard, UiCardModel } from '../'

export default {
  title: 'UI/Tailwind/Card',
  component: UiCard,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(TailwindVariants),
    },
  },
}

type StoryModel =
  | UiCardModel
  | {
      label: string
    }

const Template = (args: StoryModel, { globals }: { globals: any }) => ({
  components: { UiCard },
  setup() {
    setComponentThemeConfig(UiCard, twUiCardThemeConfigDefaults)

    if (globals.backgrounds && globals.backgrounds.value !== 'transparent') {
      provide(uiUseDarkThemeInjectionToken, true)
    }

    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-card :="args" @click="click" >{{ args.label }}</ui-card>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: TailwindVariants.Blue,
}

export const Blue = Template.bind({})
Blue.args = {
  ...baseArgs,
  variant: TailwindVariants.Blue,
}

export const Pink = Template.bind({})
Pink.args = {
  ...baseArgs,
  variant: TailwindVariants.Pink,
}

export const Purple = Template.bind({})
Purple.args = {
  ...baseArgs,
  variant: TailwindVariants.Purple,
}
