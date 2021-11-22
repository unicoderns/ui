<template>
  <UiTransitionPersist @after-leave="afterLeave">
    <div v-if="visible" :class="`tooltip fade bs-tooltip-${location} show`">
      <div class="tooltip-inner" v-html="text" />
      <div class="tooltip-arrow" id="arrow" data-popper-arrow></div>
    </div>
  </UiTransitionPersist>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TransitionPersistComponent } from '../../components/TransitionPersist'

// const className = 'UiTooltip'
const TAG_NAME = 'tooltipMessage'
export default defineComponent({
  TAG_NAME,
  components: {
    UiTransitionPersist: TransitionPersistComponent,
  },
  setup() {
    const text = ref('')
    const visible = ref(true)
    const location = ref('')
    const hostElement = ref(null as HTMLElement | null)
    const afterLeave = () => hostElement.value?.remove()

    const theme = getReactiveThemeConfig<AlertMessageThemeConfigModel>(
      TAG_NAME,
      attrs,
      props
    )

    return {
      afterLeave,
      visible,
      text,
      hostElement,
      location,
    }
  },
  methods: {
    hide() {
      this.visible = false
    },
  },
})
</script>
