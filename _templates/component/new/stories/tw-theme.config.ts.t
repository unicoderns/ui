---
to: packages/<%= h.changeCase.param(name) %>/src/stories/tw-ui-<%= h.changeCase.param(name) %>-theme.config.ts
---
import { TailwindVariants } from '@unicodernsui/custom-theme'
import { Ui<%= h.changeCase.pascal(name) %>ThemeConfigModel } from '../'

export const twUi<%= h.changeCase.pascal(name) %>ThemeConfigDefaults: Ui<%= h.changeCase.pascal(name) %>ThemeConfigModel = {
  cssClass: {
    main:
      'inline-block text-base font-normal leading-normal text-center no-underline align-middle cursor-pointer select-none bg-transparent border border-solid border-transparent rounded-lg  p-1 pr-2 pl-2 focus-within:ring-4 ring-gray-200 outline-none',
    variants: {
      [TailwindVariants.Blue]: 'text-blue-800',
      [TailwindVariants.Pink]: 'text-pink-800',
      [TailwindVariants.Purple]: 'text-purple-800',
    },
  },
}
