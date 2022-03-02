<template>
  <span :class="classes" :role="aria.role" @click="onClick">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '@uicr/core'
import { uiChipThemeConfigDefaults } from './defaults/ui-chip-theme.config'
import { uiChipAriaDefaults } from './defaults/ui-chip-aria.config'
import { UiChipThemeConfigModel } from './models/ui-chip-theme-config.model'
import { UiChipAriaConfigModel } from './models/ui-chip-aria-config.model'

const TAG_NAME = 'uiChip'

export default defineComponent({
  TAG_NAME,
  props: {
    variant: { type: String, required: true },
    pill: { type: Boolean, default: false },
    textDark: { type: Boolean, default: false },
    ['aria:role']: { type: String, default: null },
  },
  emits: ['click'],
  setup(props, { emit, attrs }) {
    const { variant, pill, textDark } = toRefs(props)

    const theme = useReactiveThemeConfig<UiChipThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiChipThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiChipAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiChipAriaDefaults
    )

    const classes = computed((): string[] => {
      const variantClass = theme.value.cssClass.variants[variant.value]
      const pillClass = pill.value ? theme.value.cssClass.pill : ''
      const textClass = textDark.value ? theme.value.cssClass.textDark : ''

      return [
        theme.value.cssClass.main,
        ...(variant.value ? [variantClass] : []),
        pillClass,
        textClass,
      ]
    })

    const onClick = (): void => {
      emit('click')
    }

    return {
      theme,
      aria,
      classes,
      onClick,
    }
  },
})
</script>
