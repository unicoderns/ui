<template>
  <UiTransitionPersist
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
        <UiBtnClose
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
        <UiBtnClose
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
  </UiTransitionPersist>
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
import { ButtonCloseComponent } from '../../components/ButtonClose'
import { TransitionPersistComponent } from '../../components/TransitionPersist'
import { ToastMessageThemeConfigModel } from './models/toast-message-theme-config.model'
import { ToastMessageAccessibilityConfigModel } from './models/toast-message-accessibility-config.model'
import { getReactiveAriaConfig, getReactiveThemeConfig } from '../../utils'
import { Position } from '../../types'

const TAG_NAME = 'toast'

export default defineComponent({
  TAG_NAME,
  components: {
    UiBtnClose: ButtonCloseComponent,
    UiTransitionPersist: TransitionPersistComponent,
  },
  props: {
    animate: { type: Boolean, default: true },
    headerText: { type: String, default: null },
    message: { type: String, default: null },
    dismissible: { type: Boolean, default: false },
    msTimer: { type: Number, required: false },
    show: { type: Boolean, default: true },
    variant: { type: String, default: null },
    dark: { type: Boolean, default: false },
    position: { type: String as PropType<Position>, default: null },
    ['aria:live']: { type: String, default: null },
    ['aria:role']: { type: String, default: null },
    ['aria:buttonClose']: { type: String, default: null },
  },
  emits: ['show', 'close'],
  setup(props, { emit, slots, attrs }) {
    const { show, variant, animate, dark, msTimer } = toRefs(props)
    const remove = ref(false)
    const visible = computed(() => show.value && !remove.value)

    const theme = getReactiveThemeConfig<ToastMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )
    const aria = getReactiveAriaConfig<ToastMessageAccessibilityConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const classes = computed(() => [
      theme.value.cssClass.main,
      ...(variant.value
        ? [theme.value.cssClass.bgVariants[variant.value]]
        : []),
      ...(animate.value ? [theme.value.cssClass.animated] : []),
    ])
    const bodyTextClasses = computed(() => [
      theme.value.cssClass.message,
      ...(dark.value ? [theme.value.cssClass.textLight] : []),
    ])
    let timeoutInterval: number | null = null
    const close = () => {
      remove.value = true
      timeoutInterval && clearInterval(timeoutInterval)
    }
    const afterEnter = () => emit('show', !remove.value)
    const beforeLeave = () => emit('close')
    const afterLeave = () => emit('show', !remove.value)

    onMounted(() => {
      if ((msTimer?.value || 0) > 0) {
        timeoutInterval = setTimeout(() => close(), msTimer?.value)
      }
    })

    return {
      remove,
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
