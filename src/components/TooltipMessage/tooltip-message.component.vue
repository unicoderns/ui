<template>
  <UiTransitionPersist
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div
      v-if="visible"
      :class="`tooltip fade bs-tooltip-${location} show`"
      :role="aria.role"
    >
      <div class="tooltip-inner" v-html="text" />
      <div class="tooltip-arrow" id="arrow" data-popper-arrow></div>
    </div>
  </UiTransitionPersist>
</template>
<script lang="ts">
import { TooltipMessageThemeConfigModel } from './models/tooltip-message-theme-config.model'
import { computed, defineComponent, Ref, ref } from 'vue'
import { TransitionPersistComponent } from '../../components/TransitionPersist'
import { getReactiveAriaConfig, getReactiveThemeConfig } from '../../utils'
import { PopperPlacement } from '@/types'
import { TooltipMessageAccessibilityConfigModel } from './models/tooltip-message-accessibility-config.model'

const TAG_NAME = 'tooltipMessage'
export default defineComponent({
  TAG_NAME,
  components: {
    UiTransitionPersist: TransitionPersistComponent,
  },
  setup(props, { attrs }) {
    const text = ref('')
    const visible = ref(false)
    const location: Ref<PopperPlacement | null> = ref(null)
    const hostElement = ref(null as HTMLElement | null)
    const show = new CustomEvent('show')
    const hide = new CustomEvent('hide')
    const close = new CustomEvent('close')

    const afterEnter = () => {
      console.log('ok')
      hostElement.value?.dispatchEvent(show)
    }

    const afterLeave = () => {
      hostElement.value?.dispatchEvent(hide)
      hostElement.value?.remove()
    }

    const beforeLeave = () => {
      hostElement.value?.dispatchEvent(close)
    }

    const theme = getReactiveThemeConfig<TooltipMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )
    const aria = getReactiveAriaConfig<TooltipMessageAccessibilityConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const classes = computed(() => [theme.value.cssClass.main])

    return {
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
