<template>
  <div ref="element">
    <slot></slot>
  </div>
  <ui-accordion v-if="element">
    <ui-accordion-section title="Show/Hide Code">
      <UiCodeHighlight :code="element" innerHtml></UiCodeHighlight>
    </ui-accordion-section>
  </ui-accordion>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UiAccordion, UiAccordionSection } from '@uicr/accordion'
import { UiCodeHighlight } from './'

const TAG_NAME = 'uiInspector'
export default defineComponent({
  TAG_NAME,
  components: {
    UiCodeHighlight,
    UiAccordion,
    UiAccordionSection,
  },
  setup() {
    const element = ref()

    return { element }
  },
})
</script>
<style scoped>
.accordion {
  margin-top: 8px;
}
</style>
