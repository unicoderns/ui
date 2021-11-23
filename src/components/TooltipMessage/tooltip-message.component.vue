<template>
  <UiTransitionPersist
    @after-enter="afterEnter"
    @after-leave="afterLeave"
    @before-leave="beforeLeave"
  >
    <div v-if="visible" :class="classes">
      <div :class="theme.cssClass.message" v-html="text" />
      <div :class="theme.cssClass.arrow" data-popper-arrow></div>
    </div>
  </UiTransitionPersist>
</template>
<script lang="ts">
import { TooltipMessageThemeConfigModel } from './models/tooltip-message-theme-config.model'
import { computed, defineComponent, Ref, ref } from 'vue'
import { TransitionPersistComponent } from '../../components/TransitionPersist'
import { getReactiveThemeConfig } from '../../utils'
import { PopperPlacement } from '@/types'

const TAG_NAME = 'tooltipMessage'
export default defineComponent({
  TAG_NAME,
  components: {
    UiTransitionPersist: TransitionPersistComponent,
  },
  emits: ['show', 'hide', 'close'],
  setup(props, { emit, attrs }) {
    const text = ref('')
    const visible = ref(true)
    const location: Ref<PopperPlacement | null> = ref(null)
    const hostElement = ref(null as HTMLElement | null)
    const afterLeave = () => {
      hostElement.value?.remove()
      emit('hide')
    }
    const afterEnter = () => emit('show')
    const beforeLeave = () => emit('close')

    const theme = getReactiveThemeConfig<TooltipMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    const classes = computed(() => [
      theme.value.cssClass.main,
      ...(location.value
        ? [theme.value.cssClass.positions[location.value]]
        : []),
    ])

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
    }
  },
  methods: {
    hide() {
      this.visible = false
    },
  },
})
</script>
