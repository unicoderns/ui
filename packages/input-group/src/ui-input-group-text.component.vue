<template>
  <component :is="renderAs" :class="theme.cssClass.inputGroupText">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {
  useReactiveThemeConfig,
  InputGroupTextType,
  InputGroupTextTypes,
} from '@unicodernsui/core'
import { bsUiInputGroupThemeConfigDefaults } from './defaults/bs-ui-input-group-theme.config'
import { UiInputGroupThemeConfigModel } from './models/ui-input-group-theme-config.model'

const TAG_NAME = 'uiInputGroupText'

export default defineComponent({
  TAG_NAME,
  props: {
    renderAs: {
      type: String as PropType<InputGroupTextType>,
      default: InputGroupTextTypes.Span,
    },
  },
  setup(props, { attrs }) {
    const theme = useReactiveThemeConfig<UiInputGroupThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiInputGroupThemeConfigDefaults
    )

    return {
      theme,
    }
  },
})
</script>
