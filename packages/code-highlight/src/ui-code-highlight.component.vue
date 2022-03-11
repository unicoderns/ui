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
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/components/prism-json'

const TAG_NAME = 'uiCodeHighlight'
export default defineComponent({
  TAG_NAME,
  props: {
    code: { type: [String, Object], default: null },
    lang: { type: String as PropType<SupportedLanguaje>, default: null },
    lineNumbers: { type: Boolean, default: false },
    innerHtml: { type: Boolean, default: false },
  },
  setup(props) {
    const { code, lang, innerHtml } = toRefs(props)
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
      } else if (typeof code.value === 'string') {
        codeToShow.value = prettierFormat(code.value, lang.value)
      } else if (code.value) {
        const codeElement: HTMLElement = code.value
        codeToShow.value = prettierFormat(
          innerHtml.value ? codeElement.innerHTML : codeElement.outerHTML,
          lang.value
        )
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
      if (typeof code.value !== 'string' && code.value) {
        const codeElement: HTMLElement = code.value
        observer.observe(codeElement, config)
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

<style>
@import '~prismjs/themes/prism.css';
@import '~prismjs/plugins/line-numbers/prism-line-numbers.css';
</style>
