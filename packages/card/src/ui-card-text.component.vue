<template>
  <p :class="theme.cssClass.text">
    <slot></slot>
  </p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useReactiveThemeConfig } from '@unicodernsui/core'
import { uiCardThemeConfigDefaults } from './defaults/ui-card-theme.config'
import { UiCardThemeConfigModel } from './models/ui-card-theme-config.model'

const TAG_NAME = 'uiCardText'

export default defineComponent({
  TAG_NAME,
  setup(props, { attrs }) {
    const theme = useReactiveThemeConfig<UiCardThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiCardThemeConfigDefaults
    )
    return {
      theme,
    }
  },
})
</script>
