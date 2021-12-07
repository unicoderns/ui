<template>
  <component
    :is="componentTag"
    :type="componentType"
    :role="aria.role"
    :class="classes"
    @click="attemptToggle"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  watchEffect,
  ref,
  toRefs,
  PropType,
} from 'vue'
import {
  ButtonSizeVariant,
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { bsUiButtonThemeConfigDefaults } from './defaults/bs-ui-button-theme.config'
import { uiButtonAriaDefaults } from './defaults/ui-button-aria.config'
import { UiButtonThemeConfigModel } from './models/ui-button-theme-config.model'
import { UiButtonAriaConfigModel } from './models/ui-button-aria-config.model'

const TAG_NAME = 'uiButton'

export default defineComponent({
  TAG_NAME,
  props: {
    anchor: { type: Boolean, default: false },
    toggle: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    variant: { type: String, required: true },
    size: { type: String as PropType<ButtonSizeVariant>, default: null },
    active: { type: Boolean, default: false },
    ['aria:role']: { type: String, default: null },
  },
  emits: ['toggle'],
  setup(props, { emit, attrs }) {
    const { anchor, toggle, outline, variant, size, active } = toRefs(props)
    const activeState = ref(active.value)

    const theme = useReactiveThemeConfig<UiButtonThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiButtonThemeConfigDefaults
    )
    const ariaConfig = useReactiveAriaConfig<UiButtonAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiButtonAriaDefaults
    )

    const componentTag = computed((): 'button' | 'a' => {
      return anchor.value ? 'a' : 'button'
    })

    const componentType = computed((): 'button' | null => {
      return anchor.value ? null : 'button'
    })

    const componentRole = computed((): string | null => {
      return anchor.value ? ariaConfig.value.role : null
    })

    const classes = computed((): string[] => {
      const sizeClass = theme.value.cssClass.sizes[size.value]
      let variantClass = theme.value.cssClass.variants[variant.value]

      if (outline.value) {
        variantClass = theme.value.cssClass.outlineVariants[variant.value]
      }

      return [
        theme.value.cssClass.main,
        ...(variant.value ? [variantClass] : []),
        ...(size.value ? [sizeClass] : []),
        ...(outline.value ? [theme.value.cssClass.outline] : []),
        ...(activeState.value ? [theme.value.cssClass.active] : []),
      ]
    })

    const attemptToggle = (): void => {
      if (toggle.value) {
        activeState.value = !activeState.value
        emit('toggle', activeState.value)
      }
    }

    watchEffect(() => {
      activeState.value = active.value
    })

    return {
      activeState,
      componentTag,
      componentType,
      componentRole,
      classes,
      aria: ariaConfig,
      attemptToggle,
    }
  },
})
</script>
