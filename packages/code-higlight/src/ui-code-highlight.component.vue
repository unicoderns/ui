<template>
  <div ref="code">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

const TAG_NAME = 'uiCodeHighlight'

export default defineComponent({
  TAG_NAME,
  setup(props, { emit, attrs }) {
    const code = ref('')
    onMounted(() => {
      console.log(code.value)
    })

    return { code }
  },
})
</script>
