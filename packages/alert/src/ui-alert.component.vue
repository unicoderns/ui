<template>
  <UiTransition
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div v-if="visible" :class="classes" :role="aria.role">
      <slot></slot>
      <UiButtonClose
        v-if="dismissible"
        :class="theme.cssClass.components.buttonClose"
        :aria:label="aria.buttonClose"
        :invert="invert"
        @close="close"
      />
    </div>
  </UiTransition>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue'
import {
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { UiButtonClose } from '@unicodernsui/button-close'
import { UiTransition } from '@unicodernsui/transition'
import { UiAlertThemeConfigModel } from './models/ui-alert-theme-config.model'
import { UiAlertAriaConfigModel } from './models/ui-alert-aria-config.model'
import { bsUiAlertThemeConfigDefaults } from './defaults/bs-ui-alert-theme.config'
import { uiAlertAriaDefaults } from './defaults/ui-alert-aria.config'

const TAG_NAME = 'uiAlert'

export default defineComponent({
  TAG_NAME,
  components: {
    UiButtonClose,
    UiTransition,
  },
  props: {
    animate: { type: Boolean, default: false },
    dismissible: { type: Boolean, default: false },
    show: { type: Boolean, default: true },
    variant: { type: String, default: null },
    invert: { type: Boolean, default: false },
    ['aria:role']: { type: String, default: null },
    ['aria:buttonClose']: { type: String, default: null },
  },
  emits: ['show', 'hide', 'close'],
  setup(props, { emit, attrs }) {
    const { animate, dismissible, show, variant } = toRefs(props)
    const remove = ref(false)
    const visible = computed(() => show.value && !remove.value)

    const theme = useReactiveThemeConfig<UiAlertThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiAlertThemeConfigDefaults
    )

    const aria = useReactiveAriaConfig<UiAlertAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiAlertAriaDefaults
    )

    const classes = computed(() => [
      theme.value.cssClass.main,
      ...(variant.value ? [theme.value.cssClass.variants[variant.value]] : []),
      ...(dismissible.value ? [theme.value.cssClass.dismissible] : []),
      ...(animate.value ? [theme.value.cssClass.animated] : []),
    ])

    const close = () => (remove.value = true)
    const afterEnter = () => emit('show')
    const beforeLeave = () => emit('close')
    const afterLeave = () => emit('hide')

    return {
      remove,
      visible,
      classes,
      theme,
      aria,
      close,
      afterEnter,
      beforeLeave,
      afterLeave,
    }
  },
})
</script>
