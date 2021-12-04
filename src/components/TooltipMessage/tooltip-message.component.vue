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
import { TooltipMessageThemeConfigModel } from './models/tooltip-message-theme-config.model'
import { computed, defineComponent, Ref, ref } from 'vue'
import { UiTransition } from '../../components/TransitionPersist'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '../../utils'
import { PopperPlacement } from '../../types'
import { TooltipMessageAccessibilityConfigModel } from './models/tooltip-message-accessibility-config.model'

const TAG_NAME = 'tooltipMessage'
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

    const theme = useReactiveThemeConfig<TooltipMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )
    const aria = useReactiveAriaConfig<TooltipMessageAccessibilityConfigModel>(
      TAG_NAME,
      attrs,
      props
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
