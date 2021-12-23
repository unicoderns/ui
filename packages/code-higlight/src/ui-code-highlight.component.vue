<template>
  <div ref="codeBlock">
    <slot />
  </div>
  <pre
    v-if="showCode"
    :class="lineNumbers ? 'line-numbers' : ''"
  ><code :class="classes">{{codeToShow}}</code></pre>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  Ref,
  toRefs,
  computed,
  PropType,
  onUnmounted,
  onMounted,
} from 'vue'
import { SupportedLanguaje, SupportedLanguajes } from './types'
import { prismClass, prettierFormat } from './utils'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/components/prism-json'

const TAG_NAME = 'uiCodeHighlight'
export default defineComponent({
  TAG_NAME,
  props: {
    refCode: { type: String, default: null },
    lang: { type: String as PropType<SupportedLanguaje>, default: null },
    slot: { type: Boolean, default: false },
    lineNumbers: { type: Boolean, default: false },
  },
  setup(props) {
    const { refCode, lang } = toRefs(props)
    const codeBlock: Ref<HTMLElement | null> = ref(null)
    const codeToShow = ref()
    const showCode = computed(() => !!codeToShow.value)

    const updateCode = () => {
      if (
        codeBlock.value?.innerHTML !== undefined &&
        codeBlock.value?.innerHTML.length > 0
      ) {
        if (codeBlock.value?.innerHTML) {
          codeToShow.value = prettierFormat(
            codeBlock.value.innerHTML,
            SupportedLanguajes.HTML
          )
        }
      } else if (refCode.value) {
        codeToShow.value = prettierFormat(refCode.value, lang.value)
      }
    }

    const config = { attributes: true, childList: true, subtree: true }

    const callback = function() {
      updateCode()
    }

    const observer = new MutationObserver(callback)

    onMounted(() => {
      if (codeBlock.value) {
        observer.observe(codeBlock.value, config)
      }
      updateCode()
    })

    const classes = computed(() => {
      return [prismClass(lang.value)]
    })

    watch(
      codeToShow,
      () => {
        Prism.highlightAll()
      },
      { flush: 'post' }
    )

    onUnmounted(() => {
      observer.disconnect()
    })

    return { codeBlock, codeToShow, showCode, classes }
  },
})
</script>
