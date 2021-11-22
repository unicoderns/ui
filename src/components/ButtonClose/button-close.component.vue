<template>
  <button
    type="button"
    :aria-label="aria.label"
    :class="classes"
    @click="close"
  ></button>
</template>

<script lang="ts">
import { getReactiveAriaConfig, getReactiveThemeConfig } from '../../utils'
import { computed, defineComponent, toRefs } from 'vue'
import { ButtonCloseAccessibilityConfigModel } from './models/button-close-accessibility-config.model'
import { ButtonCloseThemeConfigModel } from './models/button-close-theme-config.model'

const TAG_NAME = 'buttonClose'

export default defineComponent({
  TAG_NAME,
  props: {
    invert: { type: Boolean, default: false },
    ['aria:label']: { type: String, default: null },
  },
  emits: ['close'],
  setup(props, { emit, attrs }) {
    const { invert } = toRefs(props)

    const theme = getReactiveThemeConfig<ButtonCloseThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )
    const aria = getReactiveAriaConfig<ButtonCloseAccessibilityConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const classes = computed((): string[] => {
      return [
        theme.value.cssClass.main,
        invert.value ? theme.value.cssClass.inverted : '',
      ]
    })

    const close = (): void => {
      emit('close')
    }

    return {
      classes,
      close,
      aria,
    }
  },
})
</script>
