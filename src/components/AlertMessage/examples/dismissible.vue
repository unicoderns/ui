<template>
  <div>
    <p>{{ text }} <small>(animation slowed on purpose)</small></p>
    <UiAlert
      :variant="variant1"
      :dismissible="true"
      :animate="true"
      @close="close"
      @show="showed"
    >
      Click on the X to dismiss me!
    </UiAlert>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { ContextualVariants, AlertMessageComponent } from '@/index'

export default defineComponent({
  components: {
    UiAlert: AlertMessageComponent,
  },
  setup() {
    const variant1 = ref(ContextualVariants.Danger)
    const variant2 = ref(ContextualVariants.Warning)
    const alertRemoved = ref(false)
    const closingText = ref(false)

    const close = (): void => {
      closingText.value = true
    }

    const showed = (value: boolean): void => {
      alertRemoved.value = !value
      closingText.value = false
    }

    const text = computed((): string => {
      return closingText.value
        ? 'Alert closing now'
        : alertRemoved.value
        ? 'Alert Removed!!'
        : 'Alert Visible'
    })

    return {
      variant1,
      variant2,
      close,
      showed,
      text,
    }
  },
})
</script>

<style scoped>
.fade {
  transition: opacity 3s linear !important;
}
</style>
