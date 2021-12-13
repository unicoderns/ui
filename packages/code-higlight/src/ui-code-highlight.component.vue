<template>
  <div ref="code">
    <slot />
  </div>
  <pre class="line-numbers"><code class="language-html">{{newText}}</code></pre>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-markdown'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const TAG_NAME = 'uiCodeHighlight'
export default defineComponent({
  TAG_NAME,
  setup(props, { emit, attrs }) {
    const code = ref('')
    const html = `<div><ul class="nav nav-tabs"><li class="nav-item"><a class="nav-link
          " role="tab">Tab 1</a></li><li class="nav-item"><a class="nav-link
          " role="tab">Tab 2</a></li><li class="nav-item"><a class="nav-link
          active
          " aria-current="page" role="tab">Tab 3</a></li><li class="nav-item"><a class="nav-link
          disabled" role="tab">Tab 4</a></li></ul><!--v-if--><!--v-if--> Hello From Tab 3 <!--v-if--></div>`
    const newText = html.replace(/^[\r\n\s]*|[\r\n\s]*$/g, '')
    onMounted(() => {
      Prism.highlightAll()
      console.log(code.value)
    })

    return { code, html, newText }
  },
})
</script>
