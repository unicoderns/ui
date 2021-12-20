<template>
  <div ref="codeBlock">
    <slot />
  </div>
  <pre
    class="line-numbers"
  ><code class="language-html">{{codeToShow}}</code></pre>
</template>

<script lang="ts">
import { defineComponent, ref, watch, Ref, onUnmounted } from 'vue'
import prettier from 'prettier'
import parserHtml from 'prettier/parser-html'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-markdown'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const TAG_NAME = 'uiCodeHighlight'
export default defineComponent({
  TAG_NAME,
  props: {
    code: { type: String, default: null },
    lang: { type: String, default: null },
  },
  setup(props, { slots }) {
    const codeBlock: Ref<HTMLElement | null> = ref(null)
    const codeToShow = ref()

    // const newText = html.replace(/^[\r\n\s]*|[\r\n\s]*$/g, '')
    // onMounted(() => {
    //   // console.log(codeBlock.value)
    //   Prism.highlightAll()
    // })

    const intervalID = setInterval(() => {
      if (codeToShow.value !== codeBlock.value?.outerHTML) {
        if (codeBlock.value?.outerHTML) {
          const result = prettier.format(codeBlock.value.outerHTML, {
            parser: 'html',
            plugins: [parserHtml],
          })
          codeToShow.value = result
        }
      }
    }, 500)

    watch(
      codeToShow,
      () => {
        Prism.highlightAll()
      },
      { flush: 'post' }
    )

    onUnmounted(() => {
      clearInterval(intervalID)
    })

    return { codeBlock, codeToShow }
  },
})
</script>
