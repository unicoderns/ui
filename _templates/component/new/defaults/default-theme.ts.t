---
to: packages/<%= h.changeCase.param(name) %>/src/defaults/ui-<%= h.changeCase.param(name) %>-theme.config.ts
---
import { BootstrapVariants, enumToObjectByValue } from '@uicr/core'
import { Ui<%= h.changeCase.pascal(name) %>ThemeConfigModel } from '../'

const baseClass = '<%= h.changeCase.camel(name) %>'
const getPrefixedClass = (value: string) => `text-${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)
export const ui<%= h.changeCase.pascal(name) %>ThemeConfigDefaults: Ui<%= h.changeCase.pascal(name) %>ThemeConfigModel = {
  cssClass: {
    main: baseClass,
    variants: {
      ...variantClasses,
    },
  },
}
