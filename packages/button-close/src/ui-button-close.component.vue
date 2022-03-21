<template>
  <button
    type="button"
    :aria-label="aria.label"
    :class="classes"
    @click="close"
  ></button>
</template>

<script lang="ts">
const TAG_NAME = 'uiButtonClose'
export default { TAG_NAME }
</script>

<script setup lang="ts">
import { computed, useAttrs, toRefs } from 'vue'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '@uicr/core'
import { uiButtonCloseThemeConfigDefaults } from './defaults/ui-button-close-theme.config'
import { UiButtonCloseAriaConfigModel } from './models/ui-button-close-aria-config.model'
import { uiButtonCloseAriaDefaults } from './defaults/ui-button-close-aria.config'
import { UiButtonCloseThemeConfigModel } from './models/ui-button-close-theme-config.model'

const props = defineProps({
  invert: { type: Boolean, default: false },
  ['aria:label']: { type: String, default: null },
})

const emit = defineEmits(['close'])

const attrs = useAttrs()

const { invert } = toRefs(props)

const theme = useReactiveThemeConfig<UiButtonCloseThemeConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiButtonCloseThemeConfigDefaults
)
const aria = useReactiveAriaConfig<UiButtonCloseAriaConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiButtonCloseAriaDefaults
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
</script>
