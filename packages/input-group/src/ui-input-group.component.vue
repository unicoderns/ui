<template>
  <label v-if="label" :for="id" :class="`${theme.cssClass.label}`">
    {{ label }}
  </label>
  <div :role="aria.role" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, PropType } from 'vue'
import {
  InputSizeVariant,
  InputSizeVariants,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@uicr/core'
import { uiInputGroupThemeConfigDefaults } from './defaults/ui-input-group-theme.config'
import { uiInputGroupAriaDefaults } from './defaults/ui-input-group-aria.config'
import { UiInputGroupThemeConfigModel } from './models/ui-input-group-theme-config.model'
import { UiInputGroupAriaConfigModel } from './models/ui-input-group-aria-config.model'

const TAG_NAME = 'uiInputGroup'

export default defineComponent({
  TAG_NAME,
  props: {
    label: { type: String, required: false, default: '' },
    size: {
      type: String as PropType<InputSizeVariant>,
      default: InputSizeVariants.Medium,
    },
    nowrap: {
      type: Boolean,
      required: false,
    },
    ['aria:role']: { type: String, default: null },
  },
  setup(props, { attrs }) {
    const { nowrap, size } = toRefs(props)

    const theme = useReactiveThemeConfig<UiInputGroupThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiInputGroupThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiInputGroupAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiInputGroupAriaDefaults
    )

    const classes = computed((): string[] => {
      const sizeClass = theme.value.cssClass.sizes[size.value]
      const wrapClass = theme.value.cssClass.nowrap

      return [
        theme.value.cssClass.main,
        ...(size.value ? [sizeClass] : []),
        ...(nowrap.value ? [wrapClass] : []),
      ]
    })

    return {
      aria,
      classes,
      theme,
    }
  },
})
</script>
