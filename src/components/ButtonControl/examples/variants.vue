<template>
  <div>
    <UiBtn
      v-for="variant in contextualVariants"
      :key="variant"
      :variant="variant"
    >
      {{ variant }}
    </UiBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonControlComponent, ContextualVariants } from '../../../index'

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
button {
  margin: 5px;
}
</style>
