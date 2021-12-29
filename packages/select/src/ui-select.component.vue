<template>
  <select
    :role="aria.role"
    :class="classes"
    v-model="selectedValue"
    :disabled="disabled"
    :multiple="multiple"
    :aria-label="aria.label"
  >
    <slot></slot>
    <option v-for="item in datasource" :key="item.index" :value="item.index">
      {{ item.text }}
    </option>
  </select>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs, watch } from 'vue'
import {
  InputSizeVariant,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { bsUiSelectThemeConfigDefaults } from './defaults/bs-ui-select-theme.config'
import { uiSelectAriaDefaults } from './defaults/ui-select-aria.config'
import { UiSelectThemeConfigModel } from './models/ui-select-theme-config.model'
import { UiSelectAriaConfigModel } from './models/ui-select-aria-config.model'

const TAG_NAME = 'uiSelect'

export default defineComponent({
  TAG_NAME,
  props: {
    datasource: { type: Array, default: () => [] },
    modelValue: { Object, default: null },
    multiple: { type: Boolean, default: false },
    size: { type: String as PropType<InputSizeVariant>, default: null },
    disabled: { type: Boolean, default: false },
    ['aria:label']: { type: String, default: null },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const { modelValue, size } = toRefs(props)
    const selectedValue = ref(modelValue.value)

    const theme = useReactiveThemeConfig<UiSelectThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiSelectThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiSelectAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiSelectAriaDefaults
    )

    const classes = computed((): string[] => {
      const sizeClass = theme.value.cssClass.sizes[size.value]

      return [theme.value.cssClass.main, ...(size.value ? [sizeClass] : [])]
    })

    watch(selectedValue, () => {
      emit('update:modelValue', selectedValue.value)
    })

    return {
      theme,
      aria,
      classes,
      selectedValue,
    }
  },
})
</script>
