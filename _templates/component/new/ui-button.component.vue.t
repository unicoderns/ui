---
to: packages/<%= h.changeCase.param(name) %>/src/ui-<%= h.changeCase.param(name) %>.component.vue
---
<template>
  <span :role="aria.role" :class="classes">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import {
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { bsUi<%= h.changeCase.pascal(name) %>ThemeConfigDefaults } from './defaults/bs-ui-<%= h.changeCase.param(name) %>-theme.config'
import { ui<%= h.changeCase.pascal(name) %>AriaDefaults } from './defaults/ui-<%= h.changeCase.param(name) %>-aria.config'
import { Ui<%= h.changeCase.pascal(name) %>ThemeConfigModel } from './models/ui-<%= h.changeCase.param(name) %>-theme-config.model'
import { Ui<%= h.changeCase.pascal(name) %>AriaConfigModel } from './models/ui-<%= h.changeCase.param(name) %>-aria-config.model'

const TAG_NAME = 'ui<%= h.changeCase.pascal(name) %>'

export default defineComponent({
  TAG_NAME,
  props: {
    variant: { type: String, required: true },
    ['aria:role']: { type: String, default: null },
  },
  emits: ['toggle'],
  setup(props, { emit, attrs }) {
    const { variant } = toRefs(props)

    const theme = useReactiveThemeConfig<Ui<%= h.changeCase.pascal(name) %>ThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUi<%= h.changeCase.pascal(name) %>ThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<Ui<%= h.changeCase.pascal(name) %>AriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      ui<%= h.changeCase.pascal(name) %>AriaDefaults
    )

    const classes = computed((): string[] => {
      const variantClass = theme.value.cssClass.variants[variant.value]

      return [
        theme.value.cssClass.main,
        ...(variant.value ? [variantClass] : []),
      ]
    })

    return {
      theme,
      aria,
      classes,
    }
  }
})
</script>
