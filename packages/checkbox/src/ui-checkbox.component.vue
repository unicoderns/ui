<template>
  <UiRadio
    :disabled="disabled"
    :inline="inline"
    :switch="switchValue"
    :value="value"
    :aria:label="ariaLabel"
    :groupName="groupName"
    v-model="checkedValue"
  >
    <template #default v-if="slots.default">
      <slot></slot>
    </template>
  </UiRadio>
</template>

<script lang="ts">
import { defineComponent, provide, ref, toRefs, watch } from 'vue'
import {
  useReactiveAriaConfig,
  useReactiveThemeConfig,
  setComponentAriaConfig,
  setComponentThemeConfig,
} from '@uicr/core'
import { UiRadio } from '@uicr/radio'
import { uiCheckboxThemeConfigDefaults } from './defaults/ui-checkbox-theme.config'
import { uiCheckboxAriaDefaults } from './defaults/ui-checkbox-aria.config'
import { UiCheckboxAriaConfigModel } from './models/ui-checkbox-aria-config.model'
import { UiCheckboxThemeConfigModel } from './models/ui-checkbox-theme-config.model'

const TAG_NAME = 'uiCheckbox'

export default defineComponent({
  TAG_NAME,
  props: {
    disabled: { type: Boolean, default: false },
    modelValue: { type: [Boolean, String, Array], default: false },
    inline: { type: Boolean, default: false },
    switch: { type: Boolean, default: false },
    value: { type: String, default: null },
    groupName: { type: String, default: null },
    ['aria:label']: { type: String, default: null },
  },
  components: { UiRadio },
  emits: ['update:modelValue'],
  setup(props, { emit, slots, attrs }) {
    const {
      modelValue,
      ['switch']: switchValue,
      ['aria:label']: ariaLabel,
    } = toRefs(props)
    const checkedValue = ref(modelValue.value)

    watch(modelValue, value => (checkedValue.value = value))

    watch(checkedValue, v => emit('update:modelValue', v))

    const theme = useReactiveThemeConfig<UiCheckboxThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiCheckboxThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiCheckboxAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiCheckboxAriaDefaults
    )
    const RADIO_TAG_NAME = 'uiRadio'
    provide(`${RADIO_TAG_NAME}.asCheckbox`, true)
    setComponentThemeConfig({ TAG_NAME: RADIO_TAG_NAME }, theme.value)
    setComponentAriaConfig({ TAG_NAME: RADIO_TAG_NAME }, aria.value)

    return {
      checkedValue,
      switchValue,
      ariaLabel,
      slots,
    }
  },
})
</script>
