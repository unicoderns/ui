<template>
  <div>
    <UiBtn
      v-for="(size, name) in sizeVariants"
      :key="size"
      :variant="'primary'"
      :size="size"
    >
      {{ name }}
    </UiBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonControlComponent, SizeVariants } from '@/index'

export default defineComponent({
  components: {
    UiBtn: ButtonControlComponent,
  },
  data() {
    return {
      sizeVariants: { ...SizeVariants },
    }
  },
})
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
