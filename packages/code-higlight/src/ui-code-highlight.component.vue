<template>
  <!-- <div ref="code">
    <slot />
  </div> -->
  <!-- <highlightjs language="html" :code="html" /> -->
  <pre><code class="language-html">{{html}}</code></pre>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

const TAG_NAME = 'uiCodeHighlight'
export default defineComponent({
  TAG_NAME,
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  setup(props, { emit, attrs }) {
    const code = ref('')
    const html = `<div><ul class="nav nav-tabs"><li class="nav-item"><a class="nav-link
          
          " role="tab">Tab 1</a></li><li class="nav-item"><a class="nav-link
          
          " role="tab">Tab 2</a></li><li class="nav-item"><a class="nav-link
          active
          " aria-current="page" role="tab">Tab 3</a></li><li class="nav-item"><a class="nav-link
          
          disabled" role="tab">Tab 4</a></li></ul><!--v-if--><!--v-if--> Hello From Tab 3 <!--v-if--></div>`
    onMounted(() => {
      Prism.highlightAll()
      console.log(code.value)
    })

    return { code, html }
  },
})
</script>
