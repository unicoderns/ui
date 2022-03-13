<template>
  <label v-if="label" :for="id" :class="theme.cssClass.label">{{
    label
  }}</label>
  <input
    :type="type"
    :class="theme.cssClass.main"
    :id="id"
    :aria-describedby="aria.describedby"
    v-model="currentText"
    :disabled="disabled"
  />
</template>

<script lang="ts">
const TAG_NAME = 'uiInput'
export default { TAG_NAME }
</script>

<script setup lang="ts">
import { ref, toRefs, useAttrs, watch } from 'vue'
import {
  useReactiveAriaConfig,
  useReactiveThemeConfig,
  generateId,
} from '@uicr/core'
import { uiInputThemeConfigDefaults } from './defaults/ui-input-theme.config'
import { uiInputAriaDefaults } from './defaults/ui-input-aria.config'
import { UiInputThemeConfigModel } from './models/ui-input-theme-config.model'
import { UiInputAriaConfigModel } from './models/ui-input-aria-config.model'

const attrs = useAttrs()

const props = defineProps({
  type: { type: String, required: true },
  label: { type: String, default: '' },
  modelValue: { Object, default: '' },
  disabled: { type: Boolean, default: false },
  ['aria:describedby']: { type: String, default: null },
})

const emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs(props)
const currentText = ref(modelValue.value)
const theme = useReactiveThemeConfig<UiInputThemeConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiInputThemeConfigDefaults
)
const aria = useReactiveAriaConfig<UiInputAriaConfigModel>(
  TAG_NAME,
  attrs,
  props,
  uiInputAriaDefaults
)

const id = generateId()

watch(currentText, () => {
  emit('update:modelValue', currentText.value)
})
</script>
