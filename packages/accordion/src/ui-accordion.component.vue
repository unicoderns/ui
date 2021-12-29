<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  provide,
  reactive,
  toRefs,
  watch,
} from 'vue'
import {
  useReactiveAriaConfig,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { bsUiAccordionThemeConfigDefaults } from './defaults/bs-ui-accordion-theme.config'
import { uiAccordionAriaDefaults } from './defaults/ui-accordion-aria.config'
import { UiAccordionThemeConfigModel } from './models/ui-accordion-theme-config.model'
import { UiAccordionAriaConfigModel } from './models/ui-accordion-aria-config.model'
import { UiAccordionPropsModel } from './models/ui-accordion-props.model'

const TAG_NAME = 'uiAccordion'

export default defineComponent({
  TAG_NAME,
  props: {
    flush: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
  },
  emits: ['toggle'],
  setup(props, { emit, attrs }) {
    const { flush, multiple } = toRefs(props)

    const accordionState = reactive({
      sections: new Array<UiAccordionPropsModel>(),
      multiple,
    })
    provide('uiAccordionState', accordionState)

    watch(multiple, (value: boolean) => {
      accordionState.multiple = value
    })

    const theme = useReactiveThemeConfig<UiAccordionThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiAccordionThemeConfigDefaults
    )
    const aria = useReactiveAriaConfig<UiAccordionAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiAccordionAriaDefaults
    )

    const classes = computed((): string[] => {
      return [
        theme.value.cssClass.container,
        ...(flush.value ? [theme.value.cssClass.containerFlush] : []),
      ]
    })

    return {
      theme,
      aria,
      classes,
    }
  },
})
</script>
