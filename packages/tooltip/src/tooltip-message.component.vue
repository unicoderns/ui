<template>
  <UiTransition
    @enter="enter"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div v-if="visible" :class="classes" :role="aria.role">
      <div :class="theme.cssClass.message" v-html="text" />
      <div :class="theme.cssClass.arrow" data-popper-arrow></div>
    </div>
  </UiTransition>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'
import {
  useReactiveAriaConfig,
  useReactiveThemeConfig,
  PopperPlacement,
} from '@unicodernsui/core'
import { UiTransition } from '@unicodernsui/transition'
import { UiTooltipMessageAriaConfigModel } from './models/ui-tooltip-message-aria-config.model'
import { UiTooltipMessageThemeConfigModel } from './models/ui-tooltip-message-theme-config.model'
import { bsTooltipMessageThemeConfigDefaults } from './defaults/bs-tooltip-message-theme.config'
import { UiTooltipMessageAriaDefaults } from './defaults/ui-tooltip-message-aria.config'

const TAG_NAME = 'uiTooltip'
export default defineComponent({
  TAG_NAME,
  components: {
    UiTransition,
  },
  setup(props, { attrs }) {
    const text = ref('')
    const visible = ref(false)
    const location: Ref<PopperPlacement | null> = ref(null)
    const hostElement = ref(null as HTMLElement | null)
    const openEvent = new CustomEvent('open')
    const showEvent = new CustomEvent('show')
    const hideEvent = new CustomEvent('hide')
    const closeEvent = new CustomEvent('close')

    const enter = () => {
      hostElement.value?.dispatchEvent(openEvent)
    }

    const afterEnter = () => {
      hostElement.value?.dispatchEvent(showEvent)
    }

    const afterLeave = () => {
      hostElement.value?.dispatchEvent(hideEvent)
      hostElement.value?.remove()
    }

    const beforeLeave = () => {
      hostElement.value?.dispatchEvent(closeEvent)
    }

    const theme = useReactiveThemeConfig<UiTooltipMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsTooltipMessageThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiTooltipMessageAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      UiTooltipMessageAriaDefaults
    )

    const classes = computed(() => [
      theme.value.cssClass.main,
      theme.value.cssClass.animated,
      ...(location.value
        ? [theme.value.cssClass.positions[location.value]]
        : []),
    ])

    return {
      enter,
      afterEnter,
      beforeLeave,
      afterLeave,
      visible,
      text,
      hostElement,
      location,
      classes,
      theme,
      aria,
    }
  },
  methods: {
    hide() {
      this.visible = false
    },
    show() {
      this.visible = true
      this.$forceUpdate()
    },
  },
})
</script>
