<template>
  <label v-if="label" :for="id" :class="theme.cssClass.label">{{
    label
  }}</label>
  <input
    type="range"
    v-model="rangeValue"
    :class="theme.cssClass.main"
    :min="min"
    :max="max"
    :step="step"
    :id="id"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue'
import { useReactiveThemeConfig, generateId } from '@unicodernsui/core'
import { bsUiRangeThemeConfigDefaults } from './defaults/bs-ui-range-theme.config'
import { UiRangeThemeConfigModel } from './models/ui-range-theme-config.model'

const TAG_NAME = 'uiRange'

export default defineComponent({
  TAG_NAME,
  props: {
    currentValue: { type: String, default: '0' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    disabled: { type: Boolean, default: false },
    label: { type: String, required: false, default: '' },
  },
  emits: ['update:currentValue'],
  setup(props, { emit, attrs }) {
    const { currentValue } = toRefs(props)
    const rangeValue = ref(currentValue.value)

    const theme = useReactiveThemeConfig<UiRangeThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiRangeThemeConfigDefaults
    )

    const id = generateId()

    watch(rangeValue, () => {
      emit('update:currentValue', rangeValue.value)
    })

    return {
      theme,
      rangeValue,
      id,
    }
  },
})
</script>
