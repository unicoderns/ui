<template>
  <UiTransition
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div
      v-if="visible"
      :class="classes"
      :role="aria.role"
      :aria-live="aria.live"
      aria-atomic="true"
    >
      <div :class="theme.cssClass.header" v-if="!!headerText || slots.header">
        <slot v-if="slots.header" name="header" :item="props" />
        <strong v-else-if="!!headerText">{{ headerText }}</strong>
        <UiButtonClose
          v-if="dismissible"
          :class="theme.cssClass.components.buttonCloseHeader"
          :aria:label="aria.buttonClose"
          @close="close"
        />
      </div>
      <!-- IF no header but dissmissable -->
      <div v-if="dismissible && !(!!headerText || slots.header)" class="d-flex">
        <div :class="theme.cssClass.body">
          <slot v-if="slots.default" :item="props" />
          <span v-else-if="!!message" :class="bodyTextClasses">
            {{ message }}
          </span>
        </div>
        <UiButtonClose
          :class="theme.cssClass.components.buttonCloseBody"
          :aria:label="aria.buttonClose"
          @close="close"
        />
      </div>
      <!-- IF only body -->
      <div :class="theme.cssClass.body" v-else>
        <slot v-if="slots.default" :item="props" />
        <span v-else-if="!!message" :class="bodyTextClasses">{{
          message
        }}</span>
      </div>
    </div>
  </UiTransition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  toRefs,
} from 'vue'
import {
  useReactiveAriaConfig,
  useReactiveThemeConfig,
  Positions,
} from '@unicodernsui/core'
import { UiButtonClose } from '@unicodernsui/button-close'
import { UiTransition } from '@unicodernsui/transition'
import { uiToastThemeConfigDefaults } from './defaults/ui-toast-theme.config'
import { uiToastAriaDefaults } from './defaults/ui-toast-aria.config'
import { UiToastThemeConfigModel } from './models/ui-toast-theme-config.model'
import { UiToastAriaConfigModel } from './models/ui-toast-aria-config.model'

const TAG_NAME = 'uiToast'

export default defineComponent({
  TAG_NAME,
  components: {
    UiButtonClose,
    UiTransition,
  },
  props: {
    animate: { type: Boolean, default: true },
    headerText: { type: String, default: null },
    message: { type: String, default: null },
    dismissible: { type: Boolean, default: false },
    msTimer: { type: Number, required: false },
    variant: { type: String, default: null },
    dark: { type: Boolean, default: false },
    position: { type: String as PropType<Positions>, default: null },
    ['aria:live']: { type: String, default: null },
    ['aria:role']: { type: String, default: null },
    ['aria:buttonClose']: { type: String, default: null },
  },
  emits: ['show', 'close'],
  setup(props, { emit, slots, attrs }) {
    const { variant, animate, dark, msTimer } = toRefs(props)
    const visible = ref(true)

    const theme = useReactiveThemeConfig<UiToastThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiToastThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiToastAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiToastAriaDefaults
    )

    const classes = computed(() => [
      theme.value.cssClass.main,
      ...(variant.value ? [theme.value.cssClass.variants[variant.value]] : []),
      ...(animate.value ? [theme.value.cssClass.animated] : []),
    ])
    const bodyTextClasses = computed(() => [
      theme.value.cssClass.message,
      ...(dark.value ? [theme.value.cssClass.textLight] : []),
    ])
    let timeoutInterval: ReturnType<typeof setTimeout> | null = null
    const close = () => {
      visible.value = false
      timeoutInterval && clearInterval(timeoutInterval)
    }
    const afterEnter = () => emit('show', visible.value)
    const beforeLeave = () => emit('close')
    const afterLeave = () => emit('show', visible.value)

    onMounted(() => {
      if ((msTimer?.value || 0) > 0) {
        timeoutInterval = setTimeout(() => close(), msTimer?.value)
      }
    })

    return {
      visible,
      classes,
      bodyTextClasses,
      close,
      slots,
      afterEnter,
      beforeLeave,
      afterLeave,
      props,
      theme,
      aria,
    }
  },
})
</script>
