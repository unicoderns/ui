<template>
  <div ref="code">
    <slot />
  </div>

  <highlightjs language="html" code="console.log('Hello World');" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const TAG_NAME = 'uiCodeHighlight'
export default defineComponent({
  TAG_NAME,
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  setup(props, { emit, attrs }) {
    const code = ref('')
    onMounted(() => {
      console.log(code.value)
    })

    return { code }
  },
})
</script>
