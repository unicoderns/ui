<template>
  <div>
    <UiBtn
      v-for="variant in contextualVariants"
      :key="variant"
      :variant="variant"
      :anchor="true"
    >
      {{ variant }}
    </UiBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonControlComponent, ContextualVariants } from '@/index'

export default defineComponent({
  components: {
    UiBtn: ButtonControlComponent,
  },
  data() {
    return {
      contextualVariants: { ...ContextualVariants },
    }
  },
})
</script>

<style scoped>
a {
  margin: 5px;
}
</style>
