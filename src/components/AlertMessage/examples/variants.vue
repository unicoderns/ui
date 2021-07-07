<template>
  <div>
    <UiAlert
      v-for="variant in contextualVariants"
      :key="variant"
      :variant="variant"
    >
      A simple {{ variant }} alert—check it out!
    </UiAlert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ContextualVariants, AlertMessageComponent } from '@/index'

export default defineComponent({
  components: {
    UiAlert: AlertMessageComponent,
  },
  data() {
    return {
      contextualVariants: { ...ContextualVariants },
    }
  },
})
</script>
