<template>
  <p :class="theme.cssClass.text">
    <slot></slot>
  </p>
</template>

<script lang="ts">
const TAG_NAME = 'uiCardText'
export default { TAG_NAME }
</script>

<script setup lang="ts">
import { useAttrs } from 'vue'
import { useReactiveThemeConfig } from '@uicr/core'
import { uiCardThemeConfigDefaults } from './defaults/ui-card-theme.config'
import { UiCardThemeConfigModel } from './models/ui-card-theme-config.model'

const props = defineProps({})

const attrs = useAttrs()

const theme = useReactiveThemeConfig<UiCardThemeConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiCardThemeConfigDefaults
)
</script>
