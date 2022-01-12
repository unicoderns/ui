<template>
  <div :class="classes" v-if="slots.default">
    <input
      :value="value"
      :class="theme.cssClass.input"
      :type="typeValue"
      :id="id"
      :disabled="disabled"
      :name="nameValue"
      :aria-label="aria.label"
      v-model="checkedValue"
    />
    <label :class="theme.cssClass.label" :for="id">
      <slot></slot>
    </label>
  </div>
  <input
    v-else
    :value="value"
    :class="theme.cssClass.input"
    :type="typeValue"
    :disabled="disabled"
    :name="nameValue"
    :aria-label="aria.label"
    v-model="checkedValue"
  />
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, toRefs, watch } from 'vue'
import {
  generateId,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { uiRadioThemeConfigDefaults } from './defaults/ui-radio-theme.config'
import { uiRadioAriaDefaults } from './defaults/ui-radio-aria.config'
import { UiRadioThemeConfigModel } from './models/ui-radio-theme-config.model'
import { UiRadioAriaConfigModel } from './models/ui-radio-aria-config.model'

const TAG_NAME = 'uiRadio'

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
  emits: ['update:modelValue'],
  setup(props, { emit, attrs, slots }) {
    const { inline, groupName, modelValue, ['switch']: switchValue } = toRefs(
      props
    )
    const id = generateId()
    const checkedValue = ref(modelValue.value)

    const theme = useReactiveThemeConfig<UiRadioThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiRadioThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiRadioAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiRadioAriaDefaults
    )

    const asCheckbox: boolean = inject(`${TAG_NAME}.asCheckbox`, false)

    const classes = computed((): string[] => {
      return [
        theme.value.cssClass.main,
        ...(inline.value ? [theme.value.cssClass.inline] : []),
        ...(switchValue.value ? [theme.value.cssClass.switch] : []),
      ]
    })

    const typeValue = computed((): string => {
      return asCheckbox ? 'checkbox' : 'radio'
    })

    watch(modelValue, value => (checkedValue.value = value))

    const nameValue = computed((): string => {
      return groupName.value ?? null
    })

    watch(checkedValue, v => emit('update:modelValue', v))

    return {
      id,
      typeValue,
      checkedValue,
      nameValue,
      theme,
      aria,
      classes,
      slots,
    }
  },
})
</script>
