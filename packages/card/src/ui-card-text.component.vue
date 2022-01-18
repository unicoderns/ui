<template>
  <p :class="theme.cssClass.text">
    <slot></slot>
  </p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useReactiveThemeConfig } from '@unicodernsui/core'
import { bsUiCardThemeConfigDefaults } from './defaults/bs-ui-card-theme.config'
import { UiCardThemeConfigModel } from './models/ui-card-theme-config.model'

const TAG_NAME = 'uiCardText'

export default defineComponent({
  TAG_NAME,
  setup(props, { attrs }) {
    const theme = useReactiveThemeConfig<UiCardThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiCardThemeConfigDefaults
    )
    return {
      theme,
    }
  },
})
</script>
