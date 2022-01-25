<template>
  <div :class="theme.cssClass.main">
    <component :is="theme.tags.header" :class="theme.cssClass.header">
      <button
        :class="{
          [theme.cssClass.button]: true,
          [theme.cssClass.buttonCollapsed]: !open,
          [theme.cssClass.disabled]: disabled,
        }"
        type="button"
        :disabled="disabled"
        :aria-expanded="open"
        @click="toggle"
      >
        {{ title }}
      </button>
    </component>
    <UiTransition>
      <div
        v-if="open"
        :class="theme.cssClass.bodyWrapper"
        :aria-labelledby="aria.title || title"
      >
        <div :class="theme.cssClass.body">
          <slot />
        </div>
      </div>
    </UiTransition>
  </div>
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeMount,
  reactive,
  toRefs,
  watch,
} from 'vue'
import { useReactiveAriaConfig, useReactiveThemeConfig } from '@uicr/core'
import { UiTransition } from '@uicr/transition'
import { uiAccordionThemeConfigDefaults } from './defaults/ui-accordion-theme.config'
import { uiAccordionAriaDefaults } from './defaults/ui-accordion-aria.config'
import { UiAccordionAriaConfigModel } from './models/ui-accordion-aria-config.model'
import { UiAccordionPropsModel } from './models/ui-accordion-props.model'
import { UiAccordionThemeConfigModel } from './models/ui-accordion-theme-config.model'

const TAG_NAME = 'uiAccordion'

export default defineComponent({
  TAG_NAME,
  props: {
    title: { type: String, required: true },
    active: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ['aria:title']: { type: String, default: null },
  },
  emits: ['select'],
  components: { UiTransition },
  setup(props, { attrs }) {
    const { disabled, active } = toRefs(props)

    const theme = useReactiveThemeConfig<UiAccordionThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiAccordionThemeConfigDefaults
    )

    const aria = useReactiveAriaConfig<UiAccordionAriaConfigModel>(
      TAG_NAME,
      attrs,
      props,
      uiAccordionAriaDefaults
    )

    const instance: ComponentInternalInstance | null = getCurrentInstance()

    const state = inject(
      'uiAccordionState',
      reactive({
        sections: new Array<UiAccordionPropsModel>(),
        multiple: false,
      })
    )

    const sectionState = computed(() =>
      state.sections.find(
        (target: UiAccordionPropsModel) => target.uid === instance?.uid
      )
    )

    const setOpen = (value: boolean) => {
      if (sectionState.value) {
        if (value && !disabled.value) {
          if (!state.multiple) {
            state.sections.forEach(item => (item.active = false))
          }
          sectionState.value.active = true
        } else {
          sectionState.value.active = false
        }
      }
    }

    const open = computed(() => sectionState.value?.active)

    watch(active, (activeValue: boolean) => setOpen(activeValue))

    const toggle = () => setOpen(!sectionState.value?.active)

    onBeforeMount(() => {
      if (instance && !sectionState.value) {
        const aux: UiAccordionPropsModel = {
          disabled: disabled.value,
          active: active.value && !disabled.value,
          uid: Number(instance.uid),
        }

        state.sections.push(aux)
      }
    })

    return { theme, aria, open, toggle }
  },
})
</script>
